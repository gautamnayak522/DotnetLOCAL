
using System;
using System.Collections.Generic;

namespace pr2
{
    class Program
    {
        static void Main(string[] args)
        {
            Stack<int> stackofage = new Stack<int>();
            stackofage.Push(50);
            stackofage.Push(60);
            stackofage.Push(20);

            foreach (var age in stackofage)
            {
                Console.WriteLine(age);
            }
        }
    }
}
