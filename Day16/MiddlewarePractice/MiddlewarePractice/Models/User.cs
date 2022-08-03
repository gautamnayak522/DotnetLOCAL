using System;
using System.Collections.Generic;

#nullable disable

namespace MiddlewarePractice.Models
{
    public partial class User
    {
        public User()
        {
            Orders = new HashSet<Order>();
        }

        public int UserId { get; set; }
        public string UserName { get; set; }
        public bool? IsPrime { get; set; }

        public virtual ICollection<Order> Orders { get; set; }
    }
}
