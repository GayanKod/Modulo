using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class NoticeController : ControllerBase
    {
        private readonly DataContext _context;

        public NoticeController(DataContext context)
        {
           _context = context;
        }

        [Route("get-notices")]
        [HttpGet]
        public async Task<ActionResult<List<Notice>>> Get()
        {
           return Ok(await _context.Notices.ToListAsync());
        }

        [HttpGet("{id}")]
       
        public async Task<ActionResult<Notice>> Get(int id)
        {
           var notice= await _context.Notices.FindAsync(id);
           if(notice == null){
               return BadRequest("Notice not found");
           }
           
           return Ok(notice);
        }
        
        [Route("post-notices")]
        [HttpPost]

        public async Task<ActionResult<List<Notice>>> Add(Notice notice)
        {
          _context.Notices.Add(notice);
          await _context.SaveChangesAsync();
          return Ok(await _context.Notices.ToListAsync());
        }
        
        [Route("update-notices")]
        [HttpPut]

         public async Task<ActionResult<List<Notice>>> Update(Notice request)
        {
          var notice = await _context.Notices.FindAsync(request.Id);
          if(notice==null)
          return BadRequest("Notice Not Found!");

          notice.NoticeTitle = request.NoticeTitle;
          notice.Description = request.Description;

          await _context.SaveChangesAsync();

          return Ok(await _context.Notices.ToListAsync());
        }

        [HttpDelete("delete-notices/{id}")]

        public async Task<ActionResult<List<Notice>>>Delete(int id)
        {
         var notice = await _context.Notices.FindAsync(id);
         if(notice==null)
           return BadRequest("Notice not found!");

         _context.Notices.Remove(notice);

         await _context.SaveChangesAsync();

         return Ok(await _context.Notices.ToListAsync());
        }
 
    }
}