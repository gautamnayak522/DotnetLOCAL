using System;
using System.Collections.Generic;

#nullable disable

namespace ToyCompanyConsole.Models
{
    public partial class OrderedItem
    {
        public int OrderItemId { get; set; }
        public int? OrderId { get; set; }
        public int? ToyId { get; set; }
        public int? Qty { get; set; }

        public virtual Order Order { get; set; }
        public virtual Toy Toy { get; set; }
    }
}
