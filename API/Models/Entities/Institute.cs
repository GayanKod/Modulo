using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace API.Models.Entities
{
    public class Institute
    {
        public int Id { get; set; }
        public string InstituteName { get; set; } = string.Empty;

        [DataType(DataType.PhoneNumber)]
        public string ContactNumber { get; set; } = string.Empty;
        public string Passcode { get; set; }

        [JsonIgnore]
        public List<Admin> Admins { get; set; }
    }
}
