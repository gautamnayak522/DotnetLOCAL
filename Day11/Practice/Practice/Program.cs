using Practice.Models;
using System;

namespace Practice
{
    class Program
    {
      
        static void Main(string[] args)
        {
            DataHelper data = new DataHelper();
            data.PrintProducts();
            Console.WriteLine("----------------");
            data.OrdersofUser1();

            data.PrintUsers();
        }
    }
}
