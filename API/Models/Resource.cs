using System.Text.Json.Serialization;

namespace API.Models
{
    public class Resource
    {
        public int Id { get; set; }

        public String Name { get; set; }

        public int Quantity { get; set; }

        [JsonIgnore]

        public List<ClassRoom> ClassRooms { get; set; }
    }
}
