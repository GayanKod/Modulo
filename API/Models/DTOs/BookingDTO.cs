namespace API.DTOs
{
    public class BookingDTO
    {



        public int ClassRoomId { get; set; } = 3;

        public DateTime Date { get; set; } = DateTime.Now;

        public DateTime StartTime { get; set; } = DateTime.Now;

        public DateTime EndTime { get; set; } = DateTime.Now;


    }
}
