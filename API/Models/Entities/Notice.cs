using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class Notice
    {
        public int UserID { get; set; }

        public int NoticeID { get; set; }

        public string NoticeTitle { get; set; } = string.Empty;

        public string Description { get; set; } = string.Empty;

        public string NoticeType { get; set; } = string.Empty;

        public DateTime PublishedDate { get; set; } = DateTime.Now;
    }
}