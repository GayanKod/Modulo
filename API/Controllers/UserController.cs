using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Security.Cryptography;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly DataContext _context;
        public UserController(DataContext dataContext)
        {
            _context = dataContext;
        }

        [Route("get-users")]
        [HttpGet]
        public async Task<ActionResult<List<User>>> GetUsers()
        {
            return Ok(await _context.Users.ToListAsync());
        }

        [HttpGet("get-users/{id}")]
        public async Task<ActionResult<User>> GetUser(int id)
        {
            var user = await _context.Users.FindAsync(id);
            if(user == null)
                return BadRequest("User Not Found!");
            return Ok(user);
        }

        private Institute GetInstitute(int id)
        {
            var inst = _context.Institutes.Find(id);
            return inst;
        }

        //filter by Institute ID
        [HttpGet("get-users/users/{inst_id}")]
        public async Task<ActionResult<List<User>>> GetUserbyInstitute(int inst_id)
        {
            //var user = await _context.Users.FindAsync(inst_id);
            var inst = GetInstitute(inst_id);
            var user = await _context.Users
                .Where(u => u.Institutes.Contains(inst))
                .Include(u => u.Institutes)
                .Include(u => u.Batch)
                .Include(u => u.Degree)
                .ToListAsync();

            if (user == null)
                return BadRequest("User Not Found!");
            return Ok(user);
        }

        [HttpGet("get-users/usersRecent/{inst_id}")]
        public async Task<ActionResult<List<User>>> GetLastAddedUsersbyInstitute(int inst_id)
        {
            //var user = await _context.Users.FindAsync(inst_id);
            var inst = GetInstitute(inst_id);
            var user = await _context.Users.OrderByDescending(u => u.VerifiedAt)
                .Where(u => u.Institutes.Contains(inst))
                .Include(u => u.Institutes)
                .ToListAsync();

            if (user == null)
                return BadRequest("User Not Found!");
            return Ok(user);
        }

        [Route("add-user")]
        [HttpPost]
        public async Task<ActionResult<List<User>>> AddUser(AddUserDTO request)
        {
            if (_context.Users.Any(u => u.Email == request.Email))
            {
                return BadRequest("User already exists!");
            }

            CreatePasswordHash(request.Password,
                out byte[] passwordHash,
                out byte[] passwordSalt);

            var user = new User
            {
                Email = request.Email,
                FirstName = request.FirstName,
                LastName = request.LastName,
                DOB = request.DOB,
                Gender = request.Gender,
                HomeNo = request.HomeNo,
                Street = request.Street,
                Town = request.Town,
                MobileNumber = request.MobileNumber,
                Role = request.Role,
                PasswordHash = passwordHash,
                PasswordSalt = passwordSalt,
                VerificationToken = CreateRandomToken()
            };


            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            await Verify(await _context.Users.Where(a => a.Email == request.Email).Select(x => x.VerificationToken).FirstAsync());

            var userInst = new UserInstituteDTO
            {
                UserId = await _context.Users.Where(a => a.Email == request.Email).Select(x => x.Id).FirstAsync(),
                InstituteId = await _context.Institutes.Where(i => i.Id == request.InstituteId).Select(x => x.Id).FirstAsync()
            };

            await AddUserInstitute(userInst);
            return Ok("User Successfully Added!");
        }

        [Route("add-subscriber")]
        [HttpPost]
        public async Task<ActionResult<List<User>>> AddSubscriber(AddSubscriberDTO request)
        {
            if (_context.Users.Any(u => u.Email == request.Email))
            {
                return BadRequest("User already exists!");
            }

            CreatePasswordHash(request.Password,
                out byte[] passwordHash,
                out byte[] passwordSalt);

            var user = new User
            {
                Email = request.Email,
                FirstName = request.FirstName,
                LastName = request.LastName,
                DOB = request.DOB,
                Gender = request.Gender,
                HomeNo = request.HomeNo,
                Street = request.Street,
                Town = request.Town,
                MobileNumber = request.MobileNumber,
                Role = "Subscriber",
                PasswordHash = passwordHash,
                PasswordSalt = passwordSalt,
                VerificationToken = CreateRandomToken(),
                BatchId = await _context.Batches.Where(b => b.BatchName == request.Batch).Select(x => x.Id).FirstAsync(),
                DegreeId = await _context.Degrees.Where(b => b.DegreeName == request.Degree).Select(x => x.Id).FirstAsync()
            };


            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            await Verify(await _context.Users.Where(a => a.Email == request.Email).Select(x => x.VerificationToken).FirstAsync());

            var userInst = new UserInstituteDTO
            {
                UserId = await _context.Users.Where(a => a.Email == request.Email).Select(x => x.Id).FirstAsync(),
                InstituteId = await _context.Institutes.Where(i => i.Id == request.InstituteId).Select(x => x.Id).FirstAsync()
            };

            await AddUserInstitute(userInst);
            return Ok("User Successfully Added!");
        }


        [Route("update-user")]
        [HttpPut]
        public async Task<ActionResult<List<User>>> UpdateUser(UpdateUserDTO req)
        {
            var dbuser = await _context.Users.FindAsync(req.UserId);

            var currentUserRole = await _context.Users.Where(u=> u.Id == req.UserId).Select(x=> x.Role).FirstAsync();
            var reqRoleToChange = req.Role;

            var inst = await _context.Institutes
                .Where(u => u.Users.Contains(dbuser))
                .Include(u => u.Users).FirstAsync();

            var Ucount = await _context.Users
                .Where(u => u.Institutes.Contains(inst))
                .CountAsync();

            if (Ucount == 1 && reqRoleToChange != "Super Admin" && currentUserRole == "Super Admin") {
                return BadRequest("Institute should have atleast one Super Admin!");
            }


            if (dbuser == null)
                return BadRequest("User Not Found!");
            
            dbuser.Id = req.UserId;
            dbuser.FirstName = req.FirstName;
            dbuser.LastName = req.LastName;
            dbuser.Gender = req.Gender;
            dbuser.DOB = req.DOB;
            dbuser.HomeNo = req.HomeNo;
            dbuser.Street = req.Street;
            dbuser.Town = req.Town;
            dbuser.MobileNumber = req.MobileNumber;
            dbuser.Role = req.Role;

            await _context.SaveChangesAsync();

            return Ok(await _context.Users.ToListAsync());
        }

        [HttpDelete("delete-user/{id}")]
        public async Task<ActionResult<List<User>>> DeleteUser(int id)
        {
            // var inst = GetInstitute(id);
            var dbuser = await _context.Users.FindAsync(id);

            var currentUserRoleOfreqId = await _context.Users.Where(u => u.Id == id).Select(x => x.Role).FirstAsync();

            var inst = await _context.Institutes
                .Where(u => u.Users.Contains(dbuser))
                .Include(u => u.Users).FirstAsync();

            var SAcount = await _context.Users
                .Where(u => u.Institutes.Contains(inst))
                .Where(u => u.Role == "Super Admin")
                .CountAsync();


            if (SAcount <= 1 && currentUserRoleOfreqId == "Super Admin")
                return BadRequest("You cannot delete this user!");

            if (dbuser == null)
                return BadRequest("User Not Found!");

            _context.Users.Remove(dbuser);
            await _context.SaveChangesAsync();

            return Ok(await _context.Users.ToListAsync());
        }

        [HttpGet("get-users/admins/{inst_id}")]
        public async Task<ActionResult<List<User>>> GetAdminsbyInstitute(int inst_id)
        {

            var inst = GetInstitute(inst_id);
            var user = await _context.Users
                .Where(u => u.Institutes.Contains(inst))
                .Where(u => u.Role == "Admin" || u.Role == "Super Admin")
                .ToListAsync();

            if (user == null)
                return BadRequest("User Not Found!");
            return Ok(user);
        }

        [HttpGet("get-users/editors/{inst_id}")]
        public async Task<ActionResult<List<User>>> GetEditorsbyInstitute(int inst_id)
        {

            var inst = GetInstitute(inst_id);
            var user = await _context.Users
                .Where(u => u.Institutes.Contains(inst))
                .Where(u => u.Role == "Editor" || u.Role == "Super Editor")
                .ToListAsync();

            if (user == null)
                return BadRequest("User Not Found!");
            return Ok(user);
        }

        [HttpGet("get-users/subscribers/{inst_id}")]
        public async Task<ActionResult<List<User>>> GetSubscribersbyInstitute(int inst_id)
        {

            var inst = GetInstitute(inst_id);
            var user = await _context.Users
                .Where(u => u.Institutes.Contains(inst))
                .Where(u => u.Role == "Subscriber")
                .ToListAsync();

            if (user == null)
                return BadRequest("User Not Found!");
            return Ok(user);
        }


        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac = new HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

        private string CreateRandomToken()
        {
            return Convert.ToHexString(RandomNumberGenerator.GetBytes(64));
        }

        private async Task<ActionResult<User>> AddUserInstitute(UserInstituteDTO req)
        {
            var user = await _context.Users
                .Where(a => a.Id == req.UserId)
                .Include(a => a.Institutes)
                .FirstOrDefaultAsync();
            if (user == null)
                return NotFound();


            var institute = await _context.Institutes.FindAsync(req.InstituteId);
            if (institute == null)
                return NotFound();


            user.Institutes.Add(institute);
            await _context.SaveChangesAsync();

            return user;
        }

        private async Task<ActionResult> Verify(string token)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.VerificationToken == token);

            user.VerifiedAt = DateTime.Now;
            await _context.SaveChangesAsync();
            return Ok();
        }

    }
}
