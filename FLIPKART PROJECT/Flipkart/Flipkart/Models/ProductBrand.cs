using System;
using System.Collections.Generic;

#nullable disable

namespace Flipkart.Models
{
    public partial class ProductBrand
    {
        public ProductBrand()
        {
            Products = new HashSet<Product>();
        }

        public int BrandId { get; set; }
        public string BrandName { get; set; }
        public string Description { get; set; }
        public string Thumbnail { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? ModifiedAt { get; set; }

        public virtual ICollection<Product> Products { get; set; }
    }
}
