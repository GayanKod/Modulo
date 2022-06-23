using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StatController : ControllerBase
    {

        private readonly DataContext _context;
        public StatController(DataContext dataContext)
        {
            _context = dataContext;
        }


        [HttpGet("get-users-count/{inst_id}")]
        public async Task<ActionResult<StatDTO>> GetSuperAdminsCount(int inst_id)
        {
            var inst = GetInstitute(inst_id);
            var SAcount = await _context.Users
                .Where(u => u.Institutes.Contains(inst))
                .Where(u => u.Role == "Super Admin")
                .CountAsync();

            var Acount = await _context.Users
                .Where(u => u.Institutes.Contains(inst))
                .Where(u => u.Role == "Admin")
                .CountAsync();

            var SEcount = await _context.Users
                .Where(u => u.Institutes.Contains(inst))
                .Where(u => u.Role == "Super Editor")
                .CountAsync();

            var Ecount = await _context.Users
                .Where(u => u.Institutes.Contains(inst))
                .Where(u => u.Role == "Editor")
                .CountAsync();

            var Scount = await _context.Users
                .Where(u => u.Institutes.Contains(inst))
                .Where(u => u.Role == "Subscriber")
                .CountAsync();

            var stat = new StatDTO
            {
                SuperAdminsCount = SAcount,
                AdminsCount = Acount,
                SuperEditorsCount = SEcount,
                EditorsCount = Ecount,
                SubscribersCount = Scount
            };

            return Ok(stat);
        }

        private Institute GetInstitute(int id)
        {
            var inst = _context.Institutes.Find(id);
            return inst;
        }
    }
}
