using Microsoft.EntityFrameworkCore;

namespace API.DocumentData
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Document> Documents { get; set; }
    }
}
