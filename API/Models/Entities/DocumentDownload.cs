namespace API.Models.Entities
{
    public class DocumentDownload
    {
        public int Id { get; set; }
        public User? User { get; set; }
        public int? UserId { get; set; }
        public Document Document { get; set; }
        public int DocumentId { get; set; }
        public DateTime DownloadDate { get; set; } = DateTime.Now;


    }
}
