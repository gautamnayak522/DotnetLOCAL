using System;
using System.Collections.Generic;

#nullable disable

namespace Flipkart.Models
{
    public partial class Order
    {
        public Order()
        {
            Orderitems = new HashSet<Orderitem>();
        }

        public int OrderId { get; set; }
        public string OrderNo { get; set; }
        public int? UserId { get; set; }
        public DateTime? OrderDate { get; set; }
        public int? OrderstatusId { get; set; }
        public int? DeleveryAddressId { get; set; }
        public int? TotalAmount { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? ModifiedAt { get; set; }

        public virtual UserAddress DeleveryAddress { get; set; }
        public virtual OrderStatus Orderstatus { get; set; }
        public virtual User User { get; set; }
        public virtual ICollection<Orderitem> Orderitems { get; set; }
    }
}
