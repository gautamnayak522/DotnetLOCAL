using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CodeFirstPr.Models
{
    public class SchoolContext : DbContext
    {
        private const string connectionString = "Server=PC0764\\MSSQL2019;Database=SHOPING_SYSTEM;Trusted_Connection=True";

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(connectionString);
        }

        public DbSet<Student> Students { get; set; }
        public DbSet<School> Schools { get; set; }

        
    }
}
