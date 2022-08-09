using System;
using System.Collections.Generic;

#nullable disable

namespace Flipkart.Models
{
    public partial class ProductsInventory
    {
        public int ProdInvId { get; set; }
        public int? ProductId { get; set; }
        public int? Qty { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? ModifiedAt { get; set; }

        public virtual Product Product { get; set; }
    }
}
