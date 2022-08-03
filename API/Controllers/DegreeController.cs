using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DegreeController : ControllerBase
    {
        private readonly DataContext _context;
        public DegreeController(DataContext dataContext)
        {
            _context = dataContext;
        }

        [Route("get-degrees")]
        [HttpGet]
        public async Task<ActionResult<List<Degree>>> GetDegrees()
        {
            return Ok(await _context.Degrees.ToListAsync());
        }

        [HttpGet("get-degrees/{id}")]
        public async Task<ActionResult<Batch>> GetDegree(int id)
        {
            var degree = await _context.Degrees.FindAsync(id);
            if (degree == null)
                return BadRequest("Degree Not Found!");
            return Ok(degree);
        }

        private Institute GetInstitute(int id)
        {
            var inst = _context.Institutes.Find(id);
            return inst;
        }

        //filter by Institute ID
        [HttpGet("get-degrees/inst/{inst_id}")]
        public async Task<ActionResult<List<Degree>>> GetDegreebyInstitute(int inst_id)
        {
            
            var inst = GetInstitute(inst_id);
            var degree = await _context.Degrees
                .Where(d => d.Institute.Equals(inst))
                .Include(d => d.Institute).ToListAsync();

            if (degree == null)
                return BadRequest("Degrees Not Found!");
            return Ok(degree);
        }

        [Route("add-degree")]
        [HttpPost]
        public async Task<ActionResult<List<Degree>>> AddDegree(AddDegreeDTO req)
        {
            if (_context.Degrees.Any(d => d.DegreeName == req.DegreeName))
            {
                return BadRequest("Degree already exists!");
            }

            var degree = new Degree
            {
                DegreeName = req.DegreeName,
                Description = req.Description,
                DurationInYears = req.DurationInYears,
                InstituteId = req.InstituteId
            };


            _context.Degrees.Add(degree);
            await _context.SaveChangesAsync();

            return Ok("Degree Successfully Added!");
        }

        [Route("update-degree")]
        [HttpPut]
        public async Task<ActionResult<List<Degree>>> UpdateDegree(UpdateDegreeDTO req)
        {
            var dbdegree = await _context.Degrees.FindAsync(req.DegreeId);


            if (dbdegree == null)
                return BadRequest("Degree Not Found!");

            dbdegree.Id = req.DegreeId;
            dbdegree.DegreeName = req.DegreeName;
            dbdegree.Description = req.Description;
            dbdegree.DurationInYears = req.DurationInYears;


            await _context.SaveChangesAsync();

            return Ok(await _context.Degrees.ToListAsync());
        }


        [HttpDelete("delete-degree/{id}")]
        public async Task<ActionResult<List<Degree>>> DeleteDegree(int id)
        {
            var dbdegree = await _context.Degrees.FindAsync(id);

            if (dbdegree == null)
                return BadRequest("Degree not found");

            _context.Degrees.Remove(dbdegree);
            await _context.SaveChangesAsync();

            return Ok(await _context.Degrees.ToListAsync());
        }
    }
}
