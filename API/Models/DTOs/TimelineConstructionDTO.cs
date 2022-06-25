using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models.DTOs
{
    public class TimelineConstructionDTO
    {
        public String Batch { get; set; }
        public string Degree { get; set; }
        public int InstituteId { get; set; }
        public string Level { get; set; }
        public string Semester { get; set; }
        public string EventTitle {get; set;}
        public string Description {get;set;}
        public DateTime StartDate {get;set;}
        public DateTime EndDate {get;set;}
    }
}