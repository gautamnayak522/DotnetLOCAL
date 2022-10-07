using System;
using System.Collections.Generic;

#nullable disable

namespace Flipkart.Models
{
    public partial class ShopingCart
    {
        public ShopingCart()
        {
            Cartitems = new HashSet<Cartitem>();
        }

        public int CartId { get; set; }
        public int? UserId { get; set; }
        public int? TotalAmount { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? ModifiedAt { get; set; }

        public virtual User User { get; set; }
        public virtual ICollection<Cartitem> Cartitems { get; set; }
    }
}
