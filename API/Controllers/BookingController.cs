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

        [HttpGet("all-bookings")]

        public async Task<ActionResult<List<BookingDetails>>> Get()
        {
            var bookings = await _context.BookingDetails.ToListAsync();
            if (bookings == null)
            {
                return NotFound();
            }
            return Ok(bookings);

        }

        [HttpGet("user/{user}")]

        public async Task<ActionResult<List<BookingDetails>>> GetByUser(int user)
        {
            if (await _context.BookingDetails.FindAsync(user) == null) return NotFound();

            var booking = await _context.BookingDetails.Where(b => b.UserId == user).ToListAsync();
            if (booking == null)
            {
                return NotFound();
            }
            return Ok(booking);

        }


        [HttpGet("class/{classRoom}")]

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

        [HttpPost("post")]

        public async Task<ActionResult<List<BookingDetails>>> AddLabBooking(BookingDTO booking)
        {var classRoom = await _context.ClassRooms.FindAsync(booking.ClassRoomId);

     if (classRoom == null) return NotFound();

            BookingDetails newBooking = MapBookingtoDTO(booking);

            _context.BookingDetails.Add(newBooking);

            var result = await _context.SaveChangesAsync() > 0;

            if (result) return Ok(await GetBookings());

            return BadRequest(new ProblemDetails { Title = "Problem adding booking" });

        }



        [HttpDelete("delete")]

        public async Task<ActionResult<List<BookingDetails>>> DeleteBooking(int id)
        {
            var booking = await _context.BookingDetails.FindAsync(id);
            if (booking == null)
            {
                return NotFound();
            }
            _context.BookingDetails.Remove(booking);
            await _context.SaveChangesAsync();
            return Ok(await _context.BookingDetails.ToListAsync());
        }


        private static BookingDetails MapBookingtoDTO(BookingDTO booking)
        {
            return new BookingDetails
            {
                ClassRoomId = booking.ClassRoomId,
                Date = booking.Date,
                StartTime = booking.StartTime,
                EndTime = booking.EndTime,
            };
        }


        private async Task<List<BookingDetails>> GetBookings()
        {
            var bookings = await _context.BookingDetails.Include(b => b.ClassRoom).ToListAsync();
            if (bookings == null)
            {
                return null;
            }
            return bookings;

        }



    }
}