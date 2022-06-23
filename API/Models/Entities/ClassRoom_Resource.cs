﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace API.Models
{
    public class ClassRoom_Resource
    {
        public int Id { get; set; }

        [JsonIgnore]

        public ClassRoom ClassRoom { get; set; }
        public int ClassRoomId { get; set; }

        [JsonIgnore]

        public Resource Resource { get; set; }  
        public int ResourceId { get; set; }

        public int Quantity { get; set; }
    }
}
