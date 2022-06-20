using API.DTOs;
using API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookingController : ControllerBase
    {
        private readonly DataContext _context;

        public BookingController(DataContext context)
        {
            _context = context;

        }

        [HttpGet()]

        public async Task<ActionResult<List<BookingDetails>>> Get()
        {
            var bookings = await _context.BookingDetails.Include(b=>b.ClassRoom).ToListAsync();
            if (bookings == null)
            {
                return BadRequest();
            }
            return Ok(bookings);

        }

        /*[HttpGet("{user}")]

        public async Task<ActionResult<List<BookingDetails>>> GetByUser(int user)
        {
            if (await _context.ClassRooms.FindAsync(user) == null) return NotFound();

            var booking = await _context.BookingDetails.Where(b => b.User == user).ToListAsync();
            if (booking == null)
            {
                return NotFound();
            }
            return Ok(booking);

        }*/


        [HttpGet("{classRoom}")]

        public async Task<ActionResult<List<BookingDetails>>> GetBookingbyClass(int classRoom)

        {

            if (await _context.ClassRooms.FindAsync(classRoom) == null) return NotFound();

            var booking = await _context.BookingDetails.Where(b => b.ClassRoom.Id == classRoom).ToListAsync();
            if (booking == null)
            {
                return NotFound();
            }
            return Ok(booking);

        }

        [HttpPost]

        public async Task<ActionResult<List<BookingDetails>>> AddLabBooking(BookingDTO booking)
        {
            var classRoom = await _context.ClassRooms.FindAsync(booking.ClassRoomId);

            if (classRoom == null) return NotFound();

            BookingDetails newBooking = MapBookingtoDTO(booking, classRoom);

            _context.BookingDetails.Add(newBooking);

            var result = await _context.SaveChangesAsync() > 0;

            if (result) return StatusCode(201);

            return BadRequest(new ProblemDetails { Title = "Problem adding booking" });

        }

        private static BookingDetails MapBookingtoDTO(BookingDTO booking, ClassRoom? classRoom)
        {
            return new BookingDetails
            {
                User = booking.User,
                ClassRoom = classRoom,
                Date = booking.Date,
                StartTime = booking.StartTime,

            };
        }

        [HttpDelete] 

        public async Task<ActionResult> DeleteBooking(int id)
        {
            var booking=await _context.BookingDetails.FirstOrDefaultAsync(x => x.Id == id);
            if (booking == null)
            {
                return NotFound();
            }
            _context.BookingDetails.Remove(booking);
            await _context.SaveChangesAsync();
            return Ok(await _context.BookingDetails.ToListAsync());
        }
    }
}