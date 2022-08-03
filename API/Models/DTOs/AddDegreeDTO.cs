using System.ComponentModel.DataAnnotations;

namespace API.Models.DTOs
{
    public class AddDegreeDTO
    {
        [Required]
        public string DegreeName { get; set; } = string.Empty;
        public string? Description { get; set; }
        public int DurationInYears { get; set; }
        public int InstituteId { get; set; }
    }
}
