using System.Text.Json.Serialization;

namespace API.Models.Entities
{
    public class Document
    {
        public int DocumentId { get; set; }
        public string DocumentName { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty ;
        public int DocumentSize { get; set; }
        public DateTime Date { get; set; } = DateTime.Today;
        public string DocumentURL { get; set; } = string.Empty ;
        [JsonIgnore]
        public User User { get; set; }
        public int UserId { get; set; } 
        
        public List<Document_User> Document_User{ get; set; }
        
    }
}
