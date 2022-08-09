using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

#nullable disable

namespace Flipkart.Models
{
    public partial class User
    {
        public User()
        {
            Orders = new HashSet<Order>();
            UserAddresses = new HashSet<UserAddress>();
        }

        public int UserId { get; set; }
        public string MobileNo { get; set; }
        public string EmailAddress { get; set; }
        public string Password { get; set; }

        [JsonIgnore]
        public bool? IsAdmin { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Otp { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? ModifiedAt { get; set; }

        public virtual ICollection<Order> Orders { get; set; }
        public virtual ICollection<UserAddress> UserAddresses { get; set; }
    }
}
