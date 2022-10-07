using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

#nullable disable

namespace Flipkart.Models
{
    public partial class ProductSubcategory
    {
        public ProductSubcategory()
        {
            Products = new HashSet<Product>();
        }

        public int SubcatId { get; set; }
        public int? CatId { get; set; }
        public string SubcatName { get; set; }
        public string Description { get; set; }
        public string Thumbnail { get; set; }
        public bool? Active { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? ModifiedAt { get; set; }
        public virtual ProductCategory Cat { get; set; }
        public virtual ICollection<Product> Products { get; set; }
    }
}
