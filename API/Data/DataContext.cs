using Microsoft.EntityFrameworkCore;
using API.Models;
namespace API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }


        protected override void OnModelCreating(ModelBuilder modelbuilder)
        {
           
            modelbuilder.Entity<Document_User>()
                .HasOne(d => d.Document)
                .WithMany(du => du.Document_User)
                .HasForeignKey(d => d.DocumentId); 


            modelbuilder.Entity<Document_User>()
               .HasOne(d => d.User)
               .WithMany(du => du.Document_Users)
               .HasForeignKey(d => d.UserId); 
        }


        public DbSet<Document> Documents { get; set; }
         public DbSet<Notice> Notices{ get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Institute> Institutes { get; set; }

        public DbSet<Document_User> Document_Users { get; set; }

        
    }
}
        // public DataContext(DbContextOptions<DataContext> options): base(options){}

       


