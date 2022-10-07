using System;
using System.Collections.Generic;

namespace pr1
{
    class Program
    {
        static void Main(string[] args)
        {
            List<string> ListofNames = new List<string>();
            ListofNames.Add("abc");
            ListofNames.Add("xyz");
            ListofNames.Add("mno");
            ListofNames.Add("pqr");

            foreach (var name in ListofNames)
            {
                Console.WriteLine(name);
            }
            Console.WriteLine("---Index Starts from 0---");

            Console.Write("Enter Index Number : ");
            int index = Convert.ToInt32(Console.ReadLine());


            if (index < ListofNames.Count)
            {
                Console.WriteLine(ListofNames[index]);
            }
            else
            {
                Console.WriteLine("index OUT of BOUND in LIST");
            }
            }
    }
}
