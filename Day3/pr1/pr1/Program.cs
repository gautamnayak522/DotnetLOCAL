using System;

namespace pr1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            Shape sh = new square(4);
            Console.WriteLine(sh.area());
            Shape sh2 = new triangle(4,3);
            Console.WriteLine(sh2.area());

           
        }
    }
}
