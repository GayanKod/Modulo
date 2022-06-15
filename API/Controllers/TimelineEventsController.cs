using Microsoft.AspNetCore;
using API.Models.Timeline;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class TimelineEventsController : ControllerBase
    {
        private DataContext _context;

        public TimelineEventsController(DataContext context)
        {
            _context = context;
        }

        [Route("get-timeline-events")]
        [HttpGet]
        public async Task<List<TimelineEvent>> GetTimelineEvents()
        {
            return await _context.TimelineEvents.ToListAsync();
        }

        [HttpGet("get-timeline-events/{Batch}")]
        public async Task<ActionResult<TimelineEvent>> GetBatchTimelineEvents(string Batch)
        {
            var BatchTimelineEvents = await _context.TimelineEvents.FindAsync(Batch);
            if (BatchTimelineEvents == null)
                return BadRequest("Events for the"+ Batch +" Not Found!");
            return Ok(BatchTimelineEvents);
        }

        [Route("add-timeline-event")]
        [HttpPost]
        public async Task<ActionResult<List<TimelineEvent>>> AddTimelineEvent(TimelineEvent timelineEvent)
        {
            _context.TimelineEvents.Add(timelineEvent);
            await _context.SaveChangesAsync();

            return Ok(await _context.TimelineEvents.ToListAsync());
        }

    }
}