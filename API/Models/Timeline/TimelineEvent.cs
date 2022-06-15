using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models.Timeline
{
    public class TimelineEvent
    {
        public int Id { get; set; }
        public string Batch { get; set; }
        public string Semester { get; set; }
        public string EventTitle {get; set;}
        public string Description {get;set;}
        public DateTime StartDate {get;set;}
        public DateTime EndDate {get;set;}
    }
}