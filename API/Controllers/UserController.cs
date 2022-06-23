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
                .Include(u => u.Institutes).ToListAsync();

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
        public async Task<ActionResult<List<User>>> UpdateUser(User req)
        {
            var dbuser = await _context.Users.FindAsync(req.Id);
            if (dbuser == null)
                return BadRequest("User Not Found!");
            
            dbuser.Id = req.Id;
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
            var dbuser = await _context.Users.FindAsync(id);
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

        [HttpGet("get-superadmins-count/{inst_id}")]
        public async Task<ActionResult<int>> GetSuperAdminsCount(int inst_id)
        {
            var inst = GetInstitute(inst_id);
            var count = await _context.Users
                .Where(u => u.Institutes.Contains(inst))
                .Where(u => u.Role == "Super Admin")
                .CountAsync();
            return count;
        }

        [HttpGet("get-admins-count/{inst_id}")]
        public async Task<ActionResult<int>> GetAdminsCount(int inst_id)
        {
            var inst = GetInstitute(inst_id);
            var count = await _context.Users
                .Where(u => u.Institutes.Contains(inst))
                .Where(u => u.Role == "Admin")
                .CountAsync();
            return count;
        }

        [HttpGet("get-supereditors-count/{inst_id}")]
        public async Task<ActionResult<int>> GetSuperEditorsCount(int inst_id)
        {
            var inst = GetInstitute(inst_id);
            var count = await _context.Users
                .Where(u => u.Institutes.Contains(inst))
                .Where(u => u.Role == "Super Editor")
                .CountAsync();
            return count;
        }

        [HttpGet("get-editors-count/{inst_id}")]
        public async Task<ActionResult<int>> GetEditorsCount(int inst_id)
        {
            var inst = GetInstitute(inst_id);
            var count = await _context.Users
                .Where(u => u.Institutes.Contains(inst))
                .Where(u => u.Role == "Editor")
                .CountAsync();
            return count;
        }

        [HttpGet("get-subscribers-count/{inst_id}")]
        public async Task<ActionResult<int>> GetSubscribersCount(int inst_id)
        {
            var inst = GetInstitute(inst_id);
            var count = await _context.Users
                .Where(u => u.Institutes.Contains(inst))
                .Where(u => u.Role == "Subscriber")
                .CountAsync();
            return count;
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

    }
}
