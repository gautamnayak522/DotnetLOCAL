using System;
using System.Threading;
using System.Threading.Tasks;

namespace AsyncAwait
{
    class Program
    {
        public static void printloop(int a)
        {
            Task.Delay(5000);

            for (int i = 0; i < a; i++)
            {
                Console.WriteLine(i);
            }
        }
        public static void Display()
        {
            for (int i = 0; i < 10; i++)
            {
                //Console.WriteLine(i);
                Console.WriteLine($"Thread {i} Name is {Thread.CurrentThread.Name}");
            }
        }
        
        public static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");

            //printloop(5);
            //Console.WriteLine("---------");
            //Display();

            Thread thread = new Thread(new ThreadStart(Display));
            thread.Name = "first thread";
            thread.Start();
            Thread thread2 = new Thread(new ThreadStart(Display));
            thread2.Name = "Second thread";
            thread2.Start();

        }

    }
}
