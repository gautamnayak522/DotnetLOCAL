using System;

namespace pr1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("\nHello World!");
            var name = "ABCD";
            var Age = 21;
            Console.WriteLine("Hello " + name + "Age is " + Age);
            Console.WriteLine($"Hello {name}, Age is {Age}");
            Console.WriteLine("Hello {0},Age is {1}", name, Age);

            Console.WriteLine("Enter Number : ");
            var num = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine($"Numbe Is : {num}");
            Console.WriteLine($"Square Is : {num * num}");

            Console.WriteLine("CALCULATOR");

            Console.WriteLine("Enter Number1 : ");
            var num1 = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter Number2 : ");
            var num2 = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("Select Operation :  ");
            Console.WriteLine("1-Addition");
            Console.WriteLine("2-Subtraction");
            Console.WriteLine("3-Multiplication");
            Console.WriteLine("4-Division");

            var ch = Convert.ToInt32(Console.ReadLine());

            switch (ch)
            {
                case 1:
                    Console.WriteLine($"Addition Is : {num1 + num2}");
                    break;
                case 2:
                    Console.WriteLine($"Subtraction Is : {num1 - num2}");
                    break;
                case 3:
                    Console.WriteLine($"Multiplication Is : {num1 * num2}");
                    break;
                case 4:
                    Console.WriteLine($"Division Is : {num1 / num2}");
                    break;
            }
        }
    }
}
