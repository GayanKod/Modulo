using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace API.Models.Entities
{
    public class Degree
    {
        public int Id { get; set; }
        [Required]
        public string DegreeName { get; set; } = string.Empty;
        public string? Description { get; set; }
        public int DurationInYears { get; set; }
        public List<User> Users { get; set; }
        public Institute Institute { get; set; }
        public int InstituteId { get; set; }

    }
}