using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Document> Documents { get; set; }
         public DbSet<Notice> Notices{ get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Institute> Institutes { get; set; }
    }
}
        // public DataContext(DbContextOptions<DataContext> options): base(options){}

       


