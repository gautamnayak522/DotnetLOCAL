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
            var listofproducts = DBContext.Products.AsEnumerable().ToList();
            foreach (var item in listofproducts)
            {
                Console.WriteLine($"{item.Name}");
            }
        }
    }
}
