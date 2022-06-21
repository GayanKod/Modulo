using API.Models.Entities;
using API.Models.Timeline;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        { 
            
        }

        public DbSet<Admin> Admins { get; set; }
        public DbSet<Institute> Institutes { get; set; }
        public DbSet<TimelineEvent> TimelineEvents {get;set;}
        public DbSet<Degree> Degrees {get;set;}
    }
}
