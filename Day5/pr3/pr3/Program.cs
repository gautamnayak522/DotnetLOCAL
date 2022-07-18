using System;
using System.Collections.Generic;

namespace pr3
{
    class Program
    {
        static void Main(string[] args)
        {
            Dictionary<string, int> productInfo = new Dictionary<string, int>();
            productInfo.Add("Bike", 20000);
            productInfo.Add("Auto", 50000);
            productInfo.Add("Car", 70000);

            foreach (var product in productInfo)
            {
                Console.WriteLine($"Key : {product.Key}, Value : {product.Value}");
            }

            int result;
            
            Console.Write("Enter Product Name : ");
            string pr = Console.ReadLine();

            if (productInfo.TryGetValue(pr, out result))
            {
                Console.WriteLine($"Price of {pr} is {result}");
            }
            else
            {
                Console.WriteLine("Not Available Product");
            }
        }
    }
}
