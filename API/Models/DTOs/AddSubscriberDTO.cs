using System.ComponentModel.DataAnnotations;

namespace API.Models.DTOs
{
    public class AddSubscriberDTO
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public string Degree { get; set; }
        public string Batch { get; set; }
        public DateTime DOB { get; set; }
        public string Gender { get; set; }
        public string Email { get; set; }
        public string MobileNumber { get; set; }
        public string? HomeNo { get; set; }
        public string? Street { get; set; }
        public string? Town { get; set; }
        [Required, MinLength(6, ErrorMessage = "Please enter at least 6 characters")]
        public string Password { get; set; }
        [Required, Compare("Password")]
        public string ConfirmPassword { get; set; }
        public int InstituteId { get; set; }
    }
}
