using API.Models;

namespace API
{
    public class ClassRoom
    {
        public int Id { get; set; }
        public int FloorNumber { get; set; }
        public int BuildingNumber { get; set; }
        public int capacity { get; set; }
        public String? LabType { get; set; }
        public int AdminId { get; set; }
        public int ClassRoomType { get; set; }

        public List<BookingDetails> Bookings { get; set; }

        public List<Resource> Resources { get; set; }



    }
}
