using Microsoft.EntityFrameworkCore;
using API.Models;
namespace API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }



        public DbSet<Document> Documents { get; set; }
         public DbSet<Notice> Notices{ get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Institute> Institutes { get; set; }
        public DbSet<DocumentDownload> DocumentDownload { get; set; }

        

        
    }
}
        

       


