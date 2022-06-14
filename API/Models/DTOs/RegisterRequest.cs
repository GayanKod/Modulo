using System.ComponentModel.DataAnnotations;

namespace API.Models.DTOs
{
    public class RegisterRequest
    {
        public string AdminFName { get; set; } = string.Empty;
        public string AdminLName { get; set; } = string.Empty;

        [Required, EmailAddress]
        public string Email { get; set; } = string.Empty;
        public DateTime DOB { get; set; }
        public string Gender { get; set; } = string.Empty;
        public string? StreetNo { get; set; }
        public string? Street { get; set; }
        public string? Town { get; set; }

        [DataType(DataType.PhoneNumber)]
        public string MobileNumber { get; set; }

        public string InstituteName { get; set; }

        [DataType(DataType.PhoneNumber)]
        public string InstituteContactNo { get; set; }

        [Required, MinLength(6, ErrorMessage = "Please enter at least 6 characters")]
        public string Password { get; set; } = string.Empty;

        [Required, Compare("Password")]
        public string ConfirmPassword { get; set; } = string.Empty;

    }
}
