using Microsoft.EntityFrameworkCore;
using API.Models;
namespace API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }



        public DbSet<Document> Documents { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ClassRoom_Resource>()
                .HasOne(c => c.ClassRoom)
                .WithMany(c => c.ClassRoom_Resources)
                .HasForeignKey(ci => ci.ClassRoomId);

            modelBuilder.Entity<ClassRoom_Resource>()
                .HasOne(c => c.Resource)
                .WithMany(cr => cr.ClassRoom_Resources)
                .HasForeignKey(ci => ci.ResourceId);
        }

        public DbSet<ClassRoom> ClassRooms { get; set; }
        public DbSet<BookingDetails> BookingDetails { get; set; }
        public DbSet<Resource> Resources { get; set; }
        public DbSet<ClassRoom_Resource> ClassRooms_Resources { get; set; }
        public DbSet<Notice> Notices { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Institute> Institutes { get; set; }
        public DbSet<Batch> Batches { get; set; }
        public DbSet<Degree> Degrees { get; set; }
        public DbSet<DocumentDownload> DocumentDownload { get; set; }

        

        
    }
}
        

       


