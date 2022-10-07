using System;
using System.Collections.Generic;

#nullable disable

namespace ToyCompanyAPI.Models
{
    public partial class CustAddress
    {
        public CustAddress()
        {
            Orders = new HashSet<Order>();
        }

        public int AddressId { get; set; }
        public int? CustId { get; set; }
        public string Address { get; set; }
        public bool? IsDefaultAddress { get; set; }

        public virtual Customer Cust { get; set; }
        public virtual ICollection<Order> Orders { get; set; }
    }
}
