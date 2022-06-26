using System.Text.Json.Serialization;
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
        public int ClassRoomType { get; set; }

        public string HallNo { get; set; }

        public Institute Institute { get; set; }
        public int InstituteId { get; set; }

        public List<BookingDetails> Bookings { get; set; }
        public List<ClassRoom_Resource> ClassRoom_Resources { get; set; }



    }
}
