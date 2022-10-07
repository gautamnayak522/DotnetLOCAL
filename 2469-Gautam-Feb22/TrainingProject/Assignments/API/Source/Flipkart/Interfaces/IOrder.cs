using Flipkart.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Flipkart.Interfaces
{
    public interface IOrder:IRepository<Order>
    {
        public dynamic OrderwithmasterDetails(Order o);

        public dynamic GetOrderMaster();
        public dynamic GetOrderStatuses();
        public dynamic GetOrdersofUser(int userId);
        public dynamic GetOrderbyOrderNo(string orderNo);
    }
}
