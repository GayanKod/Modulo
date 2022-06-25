using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models.Entities
{
    public class Notice
    {
        public int Id { get; set; }

        public string NoticeTitle { get; set; } = string.Empty;

        public string Description { get; set; } = string.Empty;

        public string NoticeType { get; set; } = string.Empty;

        public DateTime PublishedDate { get; set; } = DateTime.Now;

        public User User { get; set; }

        public Institute Institute { get; set; }
    }
}