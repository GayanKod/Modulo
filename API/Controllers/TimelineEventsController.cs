using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class TimelineEventsController : ControllerBase
    {
        private readonly DataContext _context;

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

        [HttpPost("add-timeline-events")]
        public async Task<ActionResult<TimelineEvent>> AddBatchTimelineEvents(TimelineConstructionDTO req)
        {
            if (_context.TimelineEvents.Any(t => t.EventTitle == req.EventTitle))
            {
                return BadRequest("Timeline Event already exist!");
            }

            if(!(_context.Batches.Any(b => b.BatchName == req.Batch)))
            {
                 return BadRequest("Batch does not exist!");
            }

            var timelineEvent = new TimelineEvent{
                Level = req.Level,
                Semester = req.Semester,
                EventTitle = req.EventTitle,
                Description = req.Description,
                StartDate = req.StartDate,
                EndDate = req.EndDate,
                BatchId = await _context.Batches.Where(b => b.BatchName == req.Batch).Select(x => x.Id).FirstAsync(),
                DegreeId = await _context.Degrees.Where(d => d.DegreeName == req.Degree).Select(x => x.Id).FirstAsync(),
                InstituteId = req.InstituteId
            };

            return Ok(timelineEvent);

        }

        [Route("add-timeline-event")]
        [HttpPost]
        public async Task<ActionResult<List<TimelineEvent>>> AddTimelineEvent(TimelineEvent timelineEvent)
        {
            _context.TimelineEvents.Add(timelineEvent);
            await _context.SaveChangesAsync();

            return Ok(await _context.TimelineEvents.ToListAsync());
        }

        [Route("update-timeline-event")]
        [HttpPut]
        public async Task<ActionResult<List<TimelineEvent>>> UpdateAdmin(TimelineEvent req)
        {
            var timelineevent = await _context.TimelineEvents.FindAsync(req.Id);
            if (timelineevent == null)
                return BadRequest("Admin Not Found!");
            
            timelineevent.Id = req.Id;
            //timelineevent.Batch=req.Batch;
            timelineevent.Semester=req.Semester;
            timelineevent.EventTitle=req.EventTitle;
            timelineevent.Description=req.Description;
            timelineevent.StartDate=req.StartDate;
            timelineevent.EndDate=req.EndDate;

            await _context.SaveChangesAsync();

            return Ok(await _context.TimelineEvents.ToListAsync());
        }

        [HttpDelete("delete-timeline-event/{id}")]
        public async Task<ActionResult<List<TimelineEvent>>> DeleteTimelineEvent(int id)
        {
            var timelineevent = await _context.TimelineEvents.FindAsync(id);
            if (timelineevent == null)
                return BadRequest("Timeline event Not Found!");

            _context.TimelineEvents.Remove(timelineevent);
            await _context.SaveChangesAsync();

            return Ok(await _context.TimelineEvents.ToListAsync());
        }

    }
}