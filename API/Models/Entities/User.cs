using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace API.Models.Entities
{
    public class User
    {
        public int Id { get; set; }
        [Required]
        public string FirstName { get; set; } = string.Empty;
        [Required]
        public string LastName { get; set; } = string.Empty;
        [Required]
        public string Email { get; set; } = string.Empty;
        public DateTime DOB { get; set; }
        public string Gender { get; set; } = string.Empty;
        public string? HomeNo { get; set; }
        public string? Street { get; set; }
        public string? Town { get; set; }

        [DataType(DataType.PhoneNumber)]
        public string MobileNumber { get; set; }
        [Required]
        public string Role { get; set; } = string.Empty;
        public byte[] PasswordHash { get; set; } = new byte[32];
        public byte[] PasswordSalt { get; set; } = new byte[32];
        public string? VerificationToken { get; set; }
        public DateTime? VerifiedAt { get; set; }
        public string? PasswordResetToken { get; set; }
        public DateTime? ResetTokenExpires { get; set; }
        public List<Institute> Institutes { get; set; }

        public List<Document>? Documents { get; set; }
       public List<DocumentDownload>? DocumentDownloads { get; set; }

    }
}
