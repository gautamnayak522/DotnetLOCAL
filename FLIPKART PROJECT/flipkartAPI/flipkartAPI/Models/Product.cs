using System;
using System.Collections.Generic;

#nullable disable

namespace flipkartAPI.Models
{
    public partial class Product
    {
        public Product()
        {
            Orderitems = new HashSet<Orderitem>();
            ProductColours = new HashSet<ProductColour>();
            ProductImages = new HashSet<ProductImage>();
            ProductSizes = new HashSet<ProductSize>();
            ProductsInventories = new HashSet<ProductsInventory>();
        }

        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public string Description { get; set; }
        public int? CatId { get; set; }
        public int? BrandId { get; set; }
        public int? Price { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? ModifiedAt { get; set; }

        public virtual ProductBrand Brand { get; set; }
        public virtual ProductSubcategory Cat { get; set; }
        public virtual ICollection<Orderitem> Orderitems { get; set; }
        public virtual ICollection<ProductColour> ProductColours { get; set; }
        public virtual ICollection<ProductImage> ProductImages { get; set; }
        public virtual ICollection<ProductSize> ProductSizes { get; set; }
        public virtual ICollection<ProductsInventory> ProductsInventories { get; set; }
    }
}
