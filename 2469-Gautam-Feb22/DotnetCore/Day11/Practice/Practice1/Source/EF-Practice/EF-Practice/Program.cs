using EF_Practice.Models;
using System;
using System.Linq;

namespace EF_Practice
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");

            var context = new EXAMContext();

            var listofproducts = context.Products.ToList();

            foreach (var item in listofproducts)
            {
                Console.WriteLine(item.Name);
            }

            Console.WriteLine("---------------");

            Console.WriteLine("Placed Orders");
            foreach (var item in context.Orders.Where(o=>o.OrderStatus=="Placed"))
            {
                Console.WriteLine(item.OrderId +" "+ item.OrderStatus);
            }

            //Adding new User
            Console.WriteLine("-----------------");

            User u = new User();

            u.UserName = "newuser";
            u.IsPrime = false;


            //Console.WriteLine($"User Added : {u.UserId} {u.UserName} {u.IsPrime}");

            foreach (var item in context.Users.ToList())
            {
                Console.WriteLine(item.UserId);
            }
            Console.WriteLine("----------------");

            context.Users.Add(u);
            context.SaveChanges();

            foreach (var item in context.Users.ToList())
            {
                Console.WriteLine(item.UserId);
            }





           









        }
    }
}
