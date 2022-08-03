using System.Text.Json.Serialization;

namespace API.Models.Entities
{
    public class Batch
    {
        public int Id { get; set; }
        public string BatchName { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }

        [JsonIgnore]
        public List<User> Users { get; set; }
        [JsonIgnore]
        public Institute Institute { get; set; }
        public int InstituteId { get; set; }
    }
}
