using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace API.Models.Entities
{
    public class Institute
    {
        public int Id { get; set; }

        [Required]
        public string InstituteName { get; set; } = string.Empty;

        [Required,DataType(DataType.PhoneNumber)]
        public string ContactNumber { get; set; } = string.Empty;

        [JsonIgnore]
        public List<User> Users { get; set; }
        public List<Batch>? Batches { get; set; }
        public List<Degree>? Degrees { get; set; }
        public List<TimelineEvent>? TimelineEvents { get; set; }

    }
}
