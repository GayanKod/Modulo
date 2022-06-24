using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models.Entities
{
    public class Batch
    {
        public int Id { get; set; }
        public string BatchName { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public List<User> Users { get; set; }
        public Institute Institute { get; set; }
        public int InstituteId { get; set; }
        public List<TimelineEvent>? TimelineEvents { get; set; }

    }
}