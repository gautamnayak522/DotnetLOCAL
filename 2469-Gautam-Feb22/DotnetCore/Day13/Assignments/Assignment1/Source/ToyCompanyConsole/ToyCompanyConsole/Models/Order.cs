using System;
using System.Collections.Generic;

#nullable disable

namespace ToyCompanyConsole.Models
{
    public partial class Order
    {
        public Order()
        {
            OrderedItems = new HashSet<OrderedItem>();
        }

        public int OrderId { get; set; }
        public int? CustId { get; set; }
        public DateTime? OrderDate { get; set; }
        public int? AddtoDeliever { get; set; }
        public int? AppliedSchemeId { get; set; }

        public virtual CustAddress AddtoDelieverNavigation { get; set; }
        public virtual CompanySchem AppliedScheme { get; set; }
        public virtual Customer Cust { get; set; }
        public virtual ICollection<OrderedItem> OrderedItems { get; set; }
    }
}
