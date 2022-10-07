using Flipkart.Interfaces;
using Flipkart.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Flipkart.Services
{
    public class productinventoryService: Repository<ProductsInventory>, IProductInventory
    {
        public flipkart2469gautamContext DBContext { get; set; }
        public productinventoryService(flipkart2469gautamContext flipkartDBContext) : base(flipkartDBContext)
        {
            DBContext = flipkartDBContext;
        }

        public dynamic GetInventorybyProductID(int productID)
        {
            return DBContext.ProductsInventories.Where(x => x.ProductId == productID).FirstOrDefault();
        }
    }
}
