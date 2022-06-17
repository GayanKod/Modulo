namespace API
{
    public class Document
    {
        public int DocumentId { get; set; }
        public string DocumentName { get; set; } = string.Empty;
        public string DocumentType { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty ;
        public int TotalPages { get; set; }
        public int DocumentSize { get; set; }
        public DateTime Date { get; set; } = DateTime.Now;
        public string DocumentURL { get; set; } = string.Empty ;
        public int UserId { get; set; } 
        
        
    }
}
