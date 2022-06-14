using API.DTOs;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClassRoomController : ControllerBase

    {

        private readonly DataContext _context;

        public ClassRoomController(DataContext context)
        {
            _context = context;
        }


        [HttpGet]

        public async Task<ActionResult<List<ClassRoom>>> Get()
        {
            return Ok(await _context.ClassRooms
                .Include(c => c.Bookings)
                .Include(c => c.ClassRoom_Resources)
                .ToListAsync());
        }

        [HttpGet("{id}")]

        public async Task<ActionResult<ClassRoom>> Get(int id)
        {
            var classRoom = await _context.ClassRooms.FindAsync(id);

            if (classRoom == null)
                return BadRequest("Not Found");

            return Ok(classRoom);
        }

        [HttpPost]

        public async Task<ActionResult<List<ClassRoom>>> AddClassRoom(ClassRoom classRoom)
        {
            _context.ClassRooms.Add(classRoom);
            await _context.SaveChangesAsync();
            return Ok(await _context.ClassRooms.ToListAsync());
        }

        [HttpPut]

        public async Task<ActionResult<List<ClassRoom>>> UpdateClassRoom(ClassRoomDTO request)
        {
            var classRoom = await _context.ClassRooms.FindAsync(request.Id);

            if (classRoom == null)
                return BadRequest("Not Found");

            classRoom.Id = request.Id;
            classRoom.BuildingNumber = request.BuildingNumber;
            classRoom.FloorNumber = request.FloorNumber;
            classRoom.capacity = request.capacity;
            classRoom.LabType = request.LabType;

            await _context.SaveChangesAsync();

            return Ok(await _context.ClassRooms.ToListAsync());

        }


        [HttpDelete("{id}")]

        public async Task<ActionResult<List<ClassRoom>>> Delete(int id)
        {
            var classRoom = await _context.ClassRooms.FindAsync(id);

            if (classRoom == null)
                return BadRequest("Not Found");

            _context.ClassRooms.Remove(classRoom);

            await _context.SaveChangesAsync();

            return Ok(await _context.ClassRooms.ToListAsync());
        }

    }
}
