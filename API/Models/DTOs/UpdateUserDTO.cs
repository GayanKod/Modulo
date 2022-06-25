using System.ComponentModel.DataAnnotations;

namespace API.Models.DTOs
{
    public class UpdateUserDTO
    {
        public int UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime DOB { get; set; }
        public string Gender { get; set; }
        [Required, EmailAddress]
        public string Email { get; set; }
        [Required]
        public string Role { get; set; }
        [DataType(DataType.PhoneNumber)]
        public string MobileNumber { get; set; }
        public string HomeNo { get; set; }
        public string Street { get; set; }
        public string Town { get; set; }
        //public int InstituteId { get; set; }
    }
}
