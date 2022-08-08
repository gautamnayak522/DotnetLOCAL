using System;
using System.Collections.Generic;

#nullable disable

namespace flipkartAPI.Models
{
    public partial class ProductSize
    {
        public int ProdsizeId { get; set; }
        public int? ProductId { get; set; }
        public string Size { get; set; }
        public bool? IsAvailable { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? ModifiedAt { get; set; }

        public virtual Product Product { get; set; }
    }
}
