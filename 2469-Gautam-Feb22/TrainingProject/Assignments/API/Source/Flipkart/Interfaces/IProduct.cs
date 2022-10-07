using Flipkart.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity.Core.Objects;
using System.Linq;
using System.Threading.Tasks;

namespace Flipkart.Interfaces
{
    public interface IProduct: IRepository<Product>
    {
        public dynamic GetWithImages();
        public dynamic GetProductMaster();
    }
}
