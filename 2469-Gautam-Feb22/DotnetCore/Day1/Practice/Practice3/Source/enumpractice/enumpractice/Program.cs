using System;
enum Weekdays
{
    Sunday=1,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday
}

namespace enumpractice
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine((int)Weekdays.Monday);
            Console.WriteLine((Weekdays)2);


            Console.WriteLine("Enter WeekDay : ");
            var wname = Console.ReadLine();

            //Console.WriteLine((int)Enum.Parse(typeof(Weekdays), wname));  //throws error if value not available in enum

            Weekdays w;

            if(Enum.TryParse(wname,true,out w))
                Console.WriteLine((int)w);
            else
            {
                Console.WriteLine("Unable to Parse : NOT aillable in ENUM");
            }
             //No ERROR --> if value found then set output variable with value else set it to 0
        }
    }
}
