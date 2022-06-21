﻿namespace API
{
    public class Document
    {
        public int DocumentId { get; set; }
        public string DocumentName { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty ;
        public int DocumentSize { get; set; }
        public DateTime Date { get; set; } = DateTime.Today;
        public string DocumentURL { get; set; } = string.Empty ;
        public int UserId { get; set; } 
        
        
    }
}
