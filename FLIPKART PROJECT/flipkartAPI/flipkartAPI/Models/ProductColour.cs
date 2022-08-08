using System;
using System.Collections.Generic;

#nullable disable

namespace flipkartAPI.Models
{
    public partial class ProductColour
    {
        public int ProdColorId { get; set; }
        public int? ProductId { get; set; }
        public string Color { get; set; }
        public bool? IsAvailable { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? ModifiedAt { get; set; }

        public virtual Product Product { get; set; }
    }
}
