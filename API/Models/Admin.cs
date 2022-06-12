﻿namespace API.Models
{
    public class Admin
    {
        public string AdminID { get; set; } 
        public string AdminName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public DateTime DOB { get; set; }
        public string Gender { get; set; } = string.Empty;
        public string? StreetNo { get; set; }
        public string? Street { get; set; }
        public string? Town { get; set; }
        public string AdminType { get; set; } = string.Empty;
        public byte[] PasswordHash { get; set; } = new byte[32];
        public byte[] PasswordSalt { get; set; } = new byte[32];
        public string? VerificationToken { get; set; }
        public DateTime? VerifiedAt { get; set; }
        public string? PasswordResetToken { get; set; }
        public DateTime? ResetTokenExpires { get; set; }

    }
}
