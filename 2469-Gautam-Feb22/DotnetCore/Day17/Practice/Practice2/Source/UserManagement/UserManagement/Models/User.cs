using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace UserManagement.Models
{
    public partial class User
    {
        public int UserId { get; set; }
        
        [Required]
        public string UserName { get; set; }
        public string Password { get; set; }
        public string EmailAddress { get; set; }
        public string UserRole { get; set; }
    }
}
