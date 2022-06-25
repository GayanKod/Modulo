using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BatchController:ControllerBase
    {

        private readonly DataContext _context;

        public BatchController(DataContext context)
        {
            _context = context;
        }
        
        [Route("get-batches/{inst_id}")]
        [HttpGet]
        public async Task<ActionResult<List<Batch>>> GetBatches(int inst_id)
        {
            var inst = GetInstitute(inst_id);
            var batches = await _context.Batches
            .Where(b => b.InstituteId.Equals(inst_id))
            .ToListAsync();
            return Ok(batches);
        }

        private Institute GetInstitute(int id)
        {
            var inst = _context.Institutes.Find(id);
            return inst;
        }

        
    }
}