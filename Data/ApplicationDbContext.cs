using BulletinBoard.Models;
using Microsoft.EntityFrameworkCore;

namespace BulletinBoard.Data;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    {
        
    }
    
    public DbSet<User> Users { get; set; }
}
