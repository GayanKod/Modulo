namespace API.Models.DTOs
{
    public class AddBatchDTO
    {
        public string BatchName { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public int InstituteId { get; set; }
    }
}
