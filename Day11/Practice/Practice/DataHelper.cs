using Microsoft.EntityFrameworkCore;
using Practice.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practice
{
    class DataHelper
    {
        private SHOPING_SYSTEMContext DBContext;
        public DataHelper()
        {
            DBContext = new SHOPING_SYSTEMContext();
        }

        public void PrintProducts()
        {
            var listofproducts = DBContext.Products.ToList();
            foreach (var item in listofproducts)
            {
                Console.WriteLine($"{item.Name}");
            }
        }

        public void OrdersofUser1()
        {
            var orderofu1 = DBContext.OrderDetailDTO.FromSqlRaw<OrderDetailDTO>("exec ORDERSOFUSER1").ToList();

            foreach (var item in orderofu1)
            {
                Console.WriteLine($"{item.ProductID} {item.Name} {item.Qty} {item.Price} {item.TOTAL_PRICE}");
            }
        }

        public void PrintUsers()
        {
            var listofusers = DBContext.Users.ToList();
            Console.WriteLine("List Of Users");
            foreach (var item in listofusers)
            {
                Console.WriteLine(item.UserName);
            }
        }
    }
}
