using API.Models.Entities;
using API.Models.Timeline;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options): base(options){}

        public DbSet<Notice> Notices{ get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Institute> Institutes { get; set; }
        public DbSet<TimelineEvent> TimelineEvents {get;set;}
        public DbSet<Degree> Degrees {get;set;}
        public DbSet<Batch> Batches {get;set;}
    }
}