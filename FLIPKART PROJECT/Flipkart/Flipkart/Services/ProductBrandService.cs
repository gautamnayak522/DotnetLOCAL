using Flipkart.Interfaces;
using Flipkart.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Flipkart.Services
{
    public class ProductBrandService:Repository<ProductBrand>, IProductBrand
    {
        public ProductBrandService(FlipkartDBContext flipkartDBContext) : base(flipkartDBContext)
        {

        }
    }
}
