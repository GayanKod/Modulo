using System.ComponentModel.DataAnnotations;

namespace API.Models
{
    public class Institute
    {
        public string InstituteID { get; set; }
        public string InstituteName { get; set; } = string.Empty;

        [DataType(DataType.PhoneNumber)]
        public string ContactNumber { get; set; } = string.Empty;
    }
}
