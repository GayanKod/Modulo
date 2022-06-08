using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DocumentController : ControllerBase
    {
        

        private readonly DataContext _context;
        public DocumentController(DataContext context)
        {
             _context = context;
        }

        [HttpGet]

        public async Task<ActionResult<List<Document>>> Get()
        {
             return Ok(await _context.Documents.ToListAsync());
        }

        [HttpGet("{id}")]

        public async Task<ActionResult<Document>> Get(int id)
        {
            var document = await _context.Documents.FindAsync(id);
            if (document == null)
                return BadRequest("Document not found");
            return Ok(document);
        }

        [HttpPost]

        public async Task<ActionResult<List<Document>>> Add(Document document)
        {
           _context.Documents.Add(document);
            await _context.SaveChangesAsync();
           return Ok(await _context.Documents.ToListAsync());
        }

        [HttpPut]

        public async Task<ActionResult<List<Document>>> Update(Document request)
        {
            var document = await _context.Documents.FindAsync(request.DocumentId);
            if (document == null)
                return BadRequest("Document not found");

            document.DocumentName = request.DocumentName;
            document.Description= request.Description;
           
            await _context.SaveChangesAsync();
                    
            return Ok(await _context.Documents.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Document>>> Delete(int id)
        {
            var document = await _context.Documents.FindAsync(id);
            if (document == null)
                return BadRequest("Document not found");

            _context.Documents.Remove(document);

           
            await _context.SaveChangesAsync();

            return Ok(await _context.Documents.ToListAsync());
        }
    }
}
