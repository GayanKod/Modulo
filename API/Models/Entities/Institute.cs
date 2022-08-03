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
        [JsonIgnore]
        public List<Document>? DocumentDownloads { get; set; }
        [JsonIgnore]
        public List<ClassRoom> Classrooms { get; set; }
        [JsonIgnore]
        public List<Batch>? Batches { get; set; }
        [JsonIgnore]
        public List<Degree>? Degrees { get; set; }
    }
}
