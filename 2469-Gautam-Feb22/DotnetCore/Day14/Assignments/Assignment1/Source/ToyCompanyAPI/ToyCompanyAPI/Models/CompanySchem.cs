using System;
using System.Collections.Generic;

#nullable disable

namespace ToyCompanyAPI.Models
{
    public partial class CompanySchem
    {
        public CompanySchem()
        {
            Orders = new HashSet<Order>();
        }

        public int SchemeId { get; set; }
        public string SchemeName { get; set; }
        public DateTime? CretedOn { get; set; }
        public DateTime? ExpireOn { get; set; }

        public virtual ICollection<Order> Orders { get; set; }
    }
}
