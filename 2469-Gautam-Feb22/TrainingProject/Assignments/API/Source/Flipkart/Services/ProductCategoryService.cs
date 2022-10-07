using Flipkart.Interfaces;
using Flipkart.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;

namespace Flipkart.Services
{
    public class ProductCategoryService : Repository<ProductCategory>,IProductCategory
    {
        public flipkart2469gautamContext DBContext { get; set; }
        public ProductCategoryService(flipkart2469gautamContext flipkartDBContext) : base(flipkartDBContext)
        {
            DBContext = flipkartDBContext;
        }

        public dynamic CategorywithSubcategory()
        {
            var returndata = DBContext.ProductCategories.Include(a=>a.ProductSubcategories).Select(a=>
                new
                {
                    catId = a.CatId,
                    catName = a.CatName,
                    description = a.Description,
                    Thumbnail= a.Thumbnail ,
                    active = a.Active,
                    ProductSubcategories = a.ProductSubcategories.Select(p=>p.SubcatName)
                   });
            return returndata;
        }
    }
}

