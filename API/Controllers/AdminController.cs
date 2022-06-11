using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly DataContext _context;
        public AdminController(DataContext dataContext)
        {
            _context = dataContext;
        }

        [Route("get-admins")]
        [HttpGet]
        public async Task<ActionResult<List<Admin>>> GetAdmins()
        {
            return Ok(await _context.Admins.ToListAsync());
        }

        [HttpGet("get-admins/{id}")]
        public async Task<ActionResult<Admin>> GetAdmin(String id)
        {
            var admin = await _context.Admins.FindAsync(id);
            if(admin == null)
                return BadRequest("Admin Not Found!");
            return Ok(admin);
        }

        [Route("add-admin")]
        [HttpPost]
        public async Task<ActionResult<List<Admin>>> AddAdmin(Admin admin)
        {
            _context.Admins.Add(admin);
            await _context.SaveChangesAsync();

            return Ok(await _context.Admins.ToListAsync());
        }

        [Route("update-admin")]
        [HttpPut]
        public async Task<ActionResult<List<Admin>>> UpdateAdmin(Admin req)
        {
            var dbadmin = await _context.Admins.FindAsync(req.AdminID);
            if (dbadmin == null)
                return BadRequest("Admin Not Found!");
            
            dbadmin.AdminID = req.AdminID;
            dbadmin.AdminName = req.AdminName;
            dbadmin.Gender = req.Gender;
            dbadmin.DOB = req.DOB;
            dbadmin.StreetNo = req.StreetNo;
            dbadmin.Street = req.Street;
            dbadmin.Town = req.Town;
            dbadmin.AdminType = req.AdminType;

            await _context.SaveChangesAsync();

            return Ok(await _context.Admins.ToListAsync());
        }

        [HttpDelete("delete-admin/{id}")]
        public async Task<ActionResult<List<Admin>>> DeleteAdmin(String id)
        {
            var dbadmin = await _context.Admins.FindAsync(id);
            if (dbadmin == null)
                return BadRequest("Admin Not Found!");

            _context.Admins.Remove(dbadmin);
            await _context.SaveChangesAsync();

            return Ok(await _context.Admins.ToListAsync());
        }

    }
}
