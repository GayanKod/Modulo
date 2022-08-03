namespace API.Models.DTOs
{
    public class UpdateBatchDTO
    {
        public int BatchId { get; set; }
        public string BatchName { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public int InstituteId { get; set; }
    }
}
