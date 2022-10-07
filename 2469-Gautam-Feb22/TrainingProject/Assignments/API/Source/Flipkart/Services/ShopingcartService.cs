using Flipkart.Interfaces;
using Flipkart.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Flipkart.Services
{
    public class ShopingcartService : Repository<ShopingCart>,Ishopingcart
    {
        public flipkart2469gautamContext DBContext { get; set; }

        public ShopingcartService(flipkart2469gautamContext flipkart2469GautamContext):base(flipkart2469GautamContext)
        {

        }
    }
}
