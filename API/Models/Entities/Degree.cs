namespace API.Models.Entities
{
    public class Degree
    {
        public int Id { get; set; }
        public string? DegreeName { get; set; }
        public string? Description { get; set; }
        public int DurationInYears { get; set; }
    }
}