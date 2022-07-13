using System;

namespace agecheck
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Enter Age : ");
            int Age = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine(Age>=18? "eligible For Vote" : "NOT eligible for Vote");
        }
    }
}
