using System;
using System.Collections.Generic;

#nullable disable

namespace Practice.Models
{
    public partial class Order
    {
        public Order()
        {
            OrderItems = new HashSet<OrderItem>();
        }

        public int OrderId { get; set; }
        public int? UserId { get; set; }
        public DateTime? OrderDate { get; set; }
        public string OrderStatus { get; set; }
        public int? OrderAmount { get; set; }
        public int? DiscountAmount { get; set; }
        public int? PayableAmount { get; set; }

        public virtual User User { get; set; }
        public virtual ICollection<OrderItem> OrderItems { get; set; }
    }
}
