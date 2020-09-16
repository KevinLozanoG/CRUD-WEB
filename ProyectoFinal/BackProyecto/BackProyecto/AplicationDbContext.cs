using BackProyecto.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackProyecto
{
    public class AplicationDbContext: DbContext 
    {
        public DbSet<Persona> Persona { get; set; }


        public AplicationDbContext()
        {
            
        }

        public AplicationDbContext(DbContextOptions options) : base(options)
        {

        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseMySql("Server=localhost;Database=ABMPersona; Uid=root; Pwd=admin");
            }
           
        }
    }
}
