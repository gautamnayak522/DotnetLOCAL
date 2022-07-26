﻿using System;
using System.Threading;
using System.Threading.Tasks;

namespace asyncawaitpr2
{
    class Program
    {
        static void Main(string[] args)
        {
            // Main execution starts here  
            Console.WriteLine("Main thread starts here.");

            // This method takes 4 seconds to finish.  
            Program.DoSomeHeavyLifting();

            // This method doesn't take anytime at all.  
            Program.DoSomething();

            // Execution ends here  
            Console.WriteLine("Main thread ends here.");
            Console.ReadKey();
        }

        public static void DoSomeHeavyLifting()
        {
            Console.WriteLine("I'm lifting a truck!!");
            Task.Delay(5000);
            Console.WriteLine("Tired! Need a 3 sec nap.");
            Thread.Sleep(1000);
            Console.WriteLine("1....");
            Thread.Sleep(1000);
            Console.WriteLine("2....");
            Thread.Sleep(1000);
            Console.WriteLine("3....");
            Console.WriteLine("I'm awake.");
        }
        public static void DoSomething()
        {
            Console.WriteLine("Hey! DoSomething here!");
            for (int i = 0; i < 20; i++)
                Console.Write($"{i} ");
            Console.WriteLine();
            Console.WriteLine("I'm done.");
        }
    }
}
