using System;
enum Weekdays
{
    Sunday=1,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday
}

namespace weekdayenum
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Enter Number : ");
            int num = Convert.ToInt32(Console.ReadLine());
            Weekdays d = (Weekdays)(num);
            Console.WriteLine(d);          
       
        }
    }
}
