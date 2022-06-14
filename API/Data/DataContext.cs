using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;




namespace API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options): base(options){}

        public DbSet<Notice> Notices{ get; set; }
        public DbSet<Admin> Admins { get; set; }
        public DbSet<Institute> Institutes { get; set; }
    }
}