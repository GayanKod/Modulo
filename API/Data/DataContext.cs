using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<ClassRoom> ClassRooms { get; set; }
        public DbSet<BookingDetails> BookingDetails { get; set; }
        public DbSet<Resource> Resources { get; set; }
        //public DbSet<LabResourceRelation> LabResources { get; set; }
    }
}
