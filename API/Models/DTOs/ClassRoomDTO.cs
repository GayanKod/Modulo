namespace API.DTOs
{
    public class ClassRoomDTO
    {
        public int Id { get; set; } = 0;
        public int FloorNumber { get; set; } = 0;
        public int BuildingNumber { get; set; } = 0;
        public int capacity { get; set; } = 0;
        public String? LabType { get; set; } = "";
        public int ClassRoomType { get; set; } = 0;

        public int AdminId { get; set; } = 1;
    }
}
