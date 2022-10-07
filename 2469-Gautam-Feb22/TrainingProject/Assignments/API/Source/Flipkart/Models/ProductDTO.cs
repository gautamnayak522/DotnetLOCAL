using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Flipkart.Models
{
    public class ProductDTO
    {
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public string Description { get; set; }
        public int? CatId { get; set; }
        public int? BrandId { get; set; }
        public int? Price { get; set; }

       
    }
}
