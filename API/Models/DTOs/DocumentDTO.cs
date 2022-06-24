namespace API.Models.DTOs
{
    public class DocumentDTO
    {
        public IFormFile MyFile { get; set; }
        public string DocumentName { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
       
        public int UserId { get; set; }
    }
}
