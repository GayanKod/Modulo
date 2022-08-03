namespace API.Models.DTOs
{
    public class AddClassRoomDTO
    {
        public int FloorNumber { get; set; }
        public int BuildingNumber { get; set; }
        public string HallNo { get; set; }
        public int capacity { get; set; }
        public string? LabType { get; set; }
        public int ClassRoomType { get; set; } // 0 - Lecture Hall 1- Lab
        public int InstituteId { get; set; }
    }
}
