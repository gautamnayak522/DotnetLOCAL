using Flipkart.Interfaces;
using Flipkart.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Flipkart.Services
{
    public class ProductCategoryService : Repository<ProductCategory>,IProductCategory
    {
        public ProductCategoryService(FlipkartDBContext flipkartDBContext) : base(flipkartDBContext)
        {

        }


    }
}

