using System.ComponentModel.DataAnnotations;

namespace API.Models.DTOs
{
    public class RegisterRequest
    {
        [Required]
        public string UserFName { get; set; } = string.Empty;
        
        [Required]
        public string UserLName { get; set; } = string.Empty;

        [Required, EmailAddress]
        public string Email { get; set; } = string.Empty;
        public DateTime DOB { get; set; }
        public string Gender { get; set; } = string.Empty;
        public string? HomeNo { get; set; }
        public string? Street { get; set; }
        public string? Town { get; set; }

        [DataType(DataType.PhoneNumber)]
        public string MobileNumber { get; set; }

        [Required]
        public string InstituteName { get; set; }

        [Required,DataType(DataType.PhoneNumber)]
        public string InstituteContactNo { get; set; }

        [Required, MinLength(6, ErrorMessage = "Please enter at least 6 characters")]
        public string Password { get; set; } = string.Empty;

        [Required, Compare("Password")]
        public string ConfirmPassword { get; set; } = string.Empty;

    }
}
