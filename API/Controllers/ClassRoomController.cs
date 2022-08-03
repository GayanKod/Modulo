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


        [HttpGet("all")]

        public async Task<ActionResult<List<ClassRoom>>> Get()
        {          
            
            return Ok(await _context.ClassRooms
                .Include(c => c.Bookings)
                .Include(c => c.ClassRoom_Resources)
                .ToListAsync());
        }


        [HttpGet("institute/{institute}")]

        public async Task<ActionResult<List<ClassRoom>>> GetClassroomsByInstitute(int institute)
        {

            return Ok(await _context.ClassRooms.Where(c => c.InstituteId == institute)
                .Include(c => c.Bookings)
                .Include(c => c.ClassRoom_Resources)
                .ToListAsync());
        }

        [HttpGet("{id}")]

        public async Task<ActionResult<ClassRoom>> Get(int id)
        {
            var classRoom = await _context.ClassRooms.Where(c => c.Id == id)
                                .Include(c => c.Bookings)
                                .Include(c => c.ClassRoom_Resources).FirstAsync();

            if (classRoom == null)
                return BadRequest("Not Found");

            return Ok(classRoom);
        }

       

        [HttpPost("AddClassRoom")]
        public async Task<ActionResult<List<ClassRoom>>> AddClassRoom(AddClassRoomDTO req)
        {
            if (_context.ClassRooms.Any(u => u.HallNo == req.HallNo))
            {
                return BadRequest("Hall already exists!");
            }


            var classRoom = new ClassRoom
            {
                FloorNumber = req.FloorNumber,
                BuildingNumber = req.BuildingNumber,
                capacity = req.capacity,
                LabType = req.LabType,
                ClassRoomType = req.ClassRoomType,
                HallNo = req.HallNo,
                InstituteId = req.InstituteId
            };


            _context.ClassRooms.Add(classRoom);
            await _context.SaveChangesAsync();

            return Ok("Lecture Hall/ Lab Successfully Added!");
        }


        [HttpPut("update-lec-hall-lab")]
        public async Task<ActionResult<List<ClassRoom>>> UpdateClassRoom(ClassRoomDTO req)
        {
            var classRoom = await _context.ClassRooms.FindAsync(req.Id);

            if (classRoom == null)
                return BadRequest("Lecture Hall/Lab Not Found");

            classRoom.Id = req.Id;
            classRoom.BuildingNumber = req.BuildingNumber;
            classRoom.FloorNumber = req.FloorNumber;
            classRoom.capacity = req.capacity;
            classRoom.LabType = req.LabType;
            classRoom.ClassRoomType = req.ClassRoomType;
            classRoom.HallNo = req.HallNo;

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
