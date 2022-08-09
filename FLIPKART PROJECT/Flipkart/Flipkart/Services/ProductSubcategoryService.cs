using Flipkart.Interfaces;
using Flipkart.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Flipkart.Services
{
    public class ProductSubcategoryService : Repository<ProductSubcategory>, IProductSubcategory
    {
        public ProductSubcategoryService(FlipkartDBContext flipkartDBContext) : base(flipkartDBContext)
        {

        }
    }
}
