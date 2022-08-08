using System;
using System.Collections.Generic;

#nullable disable

namespace flipkartAPI.Models
{
    public partial class UserAddress
    {
        public UserAddress()
        {
            Orders = new HashSet<Order>();
        }

        public int UserAddId { get; set; }
        public int? UserId { get; set; }
        public string Addressline1 { get; set; }
        public string Addressline2 { get; set; }
        public string LandMark { get; set; }
        public string City { get; set; }
        public int? Pin { get; set; }
        public int? StateId { get; set; }
        public bool? IsHome { get; set; }
        public bool? IsOffice { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? ModifiedAt { get; set; }

        public virtual State State { get; set; }
        public virtual User User { get; set; }
        public virtual ICollection<Order> Orders { get; set; }
    }
}
