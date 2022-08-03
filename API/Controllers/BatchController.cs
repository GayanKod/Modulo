using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BatchController : ControllerBase
    {
        private readonly DataContext _context;
        public BatchController(DataContext dataContext)
        {
            _context = dataContext;
        }

        [Route("get-batches")]
        [HttpGet]
        public async Task<ActionResult<List<Batch>>> GetBatches()
        {
            return Ok(await _context.Batches.ToListAsync());
        }

        [HttpGet("get-batches/{id}")]
        public async Task<ActionResult<Batch>> GetBatch(int id)
        {
            var batch = await _context.Batches.FindAsync(id);
            if (batch == null)
                return BadRequest("Batch Not Found!");
            return Ok(batch);
        }

        private Institute GetInstitute(int id)
        {
            var inst = _context.Institutes.Find(id);
            return inst;
        }

        //filter by Institute ID
        [HttpGet("get-batches/inst/{inst_id}")]
        public async Task<ActionResult<List<Batch>>> GetBatchbyInstitute(int inst_id)
        {
            //var user = await _context.Users.FindAsync(inst_id);
            var inst = GetInstitute(inst_id);
            var batch = await _context.Batches
                .Where(b => b.Institute.Equals(inst))
                .Include(b => b.Institute).ToListAsync();

            if (batch == null)
                return BadRequest("Batches Not Found!");
            return Ok(batch);
        }

        [Route("add-batch")]
        [HttpPost]
        public async Task<ActionResult<List<Batch>>> AddBatch(AddBatchDTO request)
        {
            if (_context.Batches.Any(b => b.BatchName == request.BatchName))
            {
                return BadRequest("Batch already exists!");
            }

            var batch = new Batch
            {
                BatchName = request.BatchName,
                StartDate = request.StartDate,
                EndDate = request.EndDate,
                InstituteId = request.InstituteId
            };


            _context.Batches.Add(batch);
            await _context.SaveChangesAsync();

            return Ok("Batch Successfully Added!");
        }

        [Route("update-batch")]
        [HttpPut]
        public async Task<ActionResult<List<Batch>>> UpdateBatch(UpdateBatchDTO req)
        {
           var dbbatch = await _context.Batches.FindAsync(req.BatchId);


           if (dbbatch == null)
                return BadRequest("Batch Not Found!");

            dbbatch.Id = req.BatchId;
            dbbatch.StartDate = req.StartDate;
            dbbatch.EndDate = req.EndDate;
            dbbatch.BatchName = req.BatchName;
            dbbatch.InstituteId = req.InstituteId;

            await _context.SaveChangesAsync();

            return Ok(await _context.Batches.ToListAsync());
        }

        [HttpDelete("delete-batch/{id}")]
        public async Task<ActionResult<List<Batch>>> DeleteBatch(int id)
        {
            var dbbatch = await _context.Batches.FindAsync(id);

            if (dbbatch == null)
                return BadRequest("batch not found");

            _context.Batches.Remove(dbbatch);
            await _context.SaveChangesAsync();

            return Ok(await _context.Batches.ToListAsync());
        }

    }
}
