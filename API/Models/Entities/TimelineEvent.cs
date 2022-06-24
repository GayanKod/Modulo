using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Models.Entities;

namespace API.Models.Entities
{
    public class TimelineEvent
    {
        public int Id { get; set; }
        public string Level { get; set; }
        public string Semester { get; set; }
        public string EventTitle {get; set;}
        public string Description {get;set;}
        public DateTime StartDate {get;set;}
        public DateTime EndDate {get;set;}
    }
}