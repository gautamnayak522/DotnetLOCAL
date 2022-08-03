using System;
using System.Collections.Generic;

#nullable disable

namespace MiddlewarePractice.Models
{
    public partial class Discount
    {
        public int DiscountId { get; set; }
        public int? ProductId { get; set; }
        public int? DiscountPercentage { get; set; }
        public DateTime? DateStart { get; set; }
        public DateTime? DateEnd { get; set; }

        public virtual Product Product { get; set; }
    }
}
