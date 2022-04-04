using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace BulletinBoard.Models;

[Index(nameof(Email), IsUnique = true)]
public class User
{
    public long Id { get; set; }
    
    [Required]
    public string Name { get; set; }
    
    [Required]
    public string Email { get; set; }
}
