using System;
using System.Collections.Generic;

#nullable disable

namespace WebApplication15.Models
{
    public partial class Customer
    {
        public Customer()
        {
            Cars = new HashSet<Car>();
        }

        public int Id { get; set; }
        public string Fname { get; set; }
        public string Lname { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string PreferredContact { get; set; }

        public virtual ICollection<Car> Cars { get; set; }
    }
}
