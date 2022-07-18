using System;
using System.Collections.Generic;

namespace assi1
{
    class Program
    {
        static void Main(string[] args)
        {
            var listofbikesonrent = new List<Mobike>();

            while(true)
            {
                Mobike mb = new Mobike();
                mb.Input();
                
                listofbikesonrent.Add(mb);

                foreach (var el in listofbikesonrent)
                    el.Display();

                Console.WriteLine("------------------------");

   
                Console.WriteLine("1 : Add new Customer");
                Console.Write("SELECT : ");
                int choice = Convert.ToInt32(Console.ReadLine());

                if (choice != 1)
                {
                    break;
                }
            }

            

        }
    }
}
