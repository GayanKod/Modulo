using System.Text.Json.Serialization;

namespace API.Models
{
    public class Resource
    {
        public int Id { get; set; }

        public String Name { get; set; }

        public string Description { get; set; }

        public List<ClassRoom_Resource> ClassRoom_Resources { get; set; }
    }
}
