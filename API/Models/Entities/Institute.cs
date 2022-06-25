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

        public List<Notice> Notices { get; set; }
    }
}
