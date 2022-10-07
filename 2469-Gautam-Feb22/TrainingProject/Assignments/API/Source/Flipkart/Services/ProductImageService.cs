using Flipkart.Interfaces;
using Flipkart.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Flipkart.Services
{
    
    public class ProductImageService : Repository<ProductImage>, IProductImage
    {
        public ProductImageService(flipkart2469gautamContext flipkartDBContext) : base(flipkartDBContext)
        {

        }
    }
}
