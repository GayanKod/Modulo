namespace API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options): base(options){}

        public DbSet<Notice> Notices{ get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Institute> Institutes { get; set; }
    }
}