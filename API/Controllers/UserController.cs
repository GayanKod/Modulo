using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

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
        public async Task<ActionResult<User>> GetUser(String id)
        {
            var user = await _context.Users.FindAsync(id);
            if(user == null)
                return BadRequest("User Not Found!");
            return Ok(user);
        }

        [Route("add-user")]
        [HttpPost]
        public async Task<ActionResult<List<User>>> AddUser(User user)
        {
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return Ok(await _context.Users.ToListAsync());
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

        [Route("get-admins")]
        [HttpGet]
        public async Task<ActionResult<List<User>>> GetAdmins()
        {
            return Ok(await _context.Users.Where(u => u.Role == "Admin" || u.Role == "Super Admin").ToListAsync());
        }

        [Route("get-editors")]
        [HttpGet]
        public async Task<ActionResult<List<User>>> GetEditors()
        {
            return Ok(await _context.Users.Where(u => u.Role == "Editor" || u.Role == "Super Editor").ToListAsync());
        }

        [Route("get-subscribers")]
        [HttpGet]
        public async Task<ActionResult<List<User>>> GetSubscribers()
        {
            return Ok(await _context.Users.Where(u => u.Role == "Subscriber").ToListAsync());
        }

    }
}
