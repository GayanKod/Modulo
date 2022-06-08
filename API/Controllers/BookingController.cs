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
            var bookings = await _context.BookingDetails.ToListAsync();
            if (bookings == null)
            {
                return BadRequest();
            }
            return Ok(bookings);

        }


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

        public async Task<ActionResult<List<BookingDetails>>> AddLabBooking(BookingDTO request)
        {
            var classRoom = await _context.ClassRooms.FindAsync(request.ClassRoomId);

            if (classRoom == null)   return NotFound();

            var newBooking = new BookingDetails
            {
                User = request.User, 
                ClassRoom = classRoom,
                Date = request.Date,
                StartTime = request.StartTime,

            };

            _context.BookingDetails.Add(newBooking);

            await _context.SaveChangesAsync();

            return await GetBookingbyClass(newBooking.ClassRoom.Id);
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
