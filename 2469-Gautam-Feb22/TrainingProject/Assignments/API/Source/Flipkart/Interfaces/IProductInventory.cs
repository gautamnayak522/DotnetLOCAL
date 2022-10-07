using Flipkart.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Flipkart.Interfaces
{
    public interface IProductInventory:IRepository<ProductsInventory>
    {
        public dynamic GetInventorybyProductID(int productID);
    }
}
