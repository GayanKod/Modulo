using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InstituteController : ControllerBase
    {
        private readonly DataContext _context;
        public InstituteController(DataContext dataContext)
        {
            _context = dataContext;
        }

        [Route("get-institutes")]
        [HttpGet]
        public async Task<ActionResult<List<Institute>>> GetInstitutes()
        {
            return Ok(await _context.Institutes.ToListAsync());
        }

        [HttpDelete("delete-institute/{id}")]
        public async Task<ActionResult<List<User>>> DeleteUser(int id)
        {
            var dbinstitute = await _context.Institutes.FindAsync(id);
            if (dbinstitute == null)
                return BadRequest("Institute Not Found!");

            _context.Institutes.Remove(dbinstitute);
            await _context.SaveChangesAsync();

            return Ok(await _context.Institutes.ToListAsync());
        }
    }
}
