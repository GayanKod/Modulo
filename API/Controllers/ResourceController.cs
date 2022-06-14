using API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ResourceController : ControllerBase
    {
        private readonly DataContext _context;

        public ResourceController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]

        public async Task<ActionResult<List<Resource>>> Get()
        {
            return await _context.Resources.ToListAsync();
        }

        [HttpPost]

        public async Task<ActionResult<List<Resource>>> Post(Resource resource)
        {
            _context.Resources.Add(resource);

            await _context.SaveChangesAsync();

            return Ok(await _context.Resources.ToListAsync());

       
        }

        [HttpPut("{id}")]

        public async Task<ActionResult<List<Resource>>> Update(Resource request)
        {
            var resource = await _context.Resources.FindAsync(request.Id);
            if (resource == null) return NotFound();

            resource.Name = resource.Name;
            resource.Description = resource.Description;

            await _context.SaveChangesAsync();

            return Ok(await _context.Resources.ToListAsync());
        }


        [HttpDelete("{id}")]

        public async Task<ActionResult<List<Resource>>> Delete(int id)
        {
            var resource = await _context.Resources.FindAsync(id);

            if (resource == null) return NotFound();

            _context.Resources.Remove(resource);

            await _context.SaveChangesAsync();

            return Ok(await _context.Resources.ToListAsync());

        }
    }
}
