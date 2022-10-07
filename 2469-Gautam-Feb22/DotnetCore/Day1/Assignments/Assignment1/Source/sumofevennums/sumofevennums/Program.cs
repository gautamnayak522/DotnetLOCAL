using System;

namespace sumofevennums
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Enter Last Number :");
            int num = Convert.ToInt32(Console.ReadLine());
            int result = 0;
            for (int i = 0; i <= num; i++)
            {
                if (i % 2 == 0)
                {
                    Console.Write(i + " ");
                    result = result + i;
                }
            }
            Console.WriteLine("\n SUM OF ALL EVEN NUMS ARE : " + result);
        }
    }
}
