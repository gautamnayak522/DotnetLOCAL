using System;

namespace practice1
{   
   
    class Program
    {
        private static string Zodiac_sign(int year)
        {
            if ((year - 2000) % 12 == 0)
                return "Dragon";
            else if ((year - 2000) % 12 == 1)
                return "Snake";
            else if ((year - 2000) % 12 == 1)
                return "Snake";
            else if ((year - 2000) % 12 == 1)
                return "Snake";
            else if ((year - 2000) % 12 == 1)
                return "Snake";
            else
                return "Not available";
        }

        private static void my_method(int Age)
        {
            if (Age >= 18)
                Console.WriteLine("Method is Called : ELIGIBLE");
            else
                Console.WriteLine("Method is Called :NOT ELIGIBLE");
        }
        static void Main(string[] args)
        {
            Console.WriteLine("Enter Age : ");
            int Age = Convert.ToInt32(Console.ReadLine());
            my_method(Age);

            Console.WriteLine("Enter Year : ");
            int Year = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine(Zodiac_sign(Year));

            Console.WriteLine("-------------------------");
            Employee e1 = new Employee("MMM", 50);

            Console.WriteLine("EmployeeName :"+ e1.PName);
            Console.WriteLine("EmpAge : "+e1.Age);
            Console.WriteLine("Eligibility : " + e1.eligible);
        }
    }
}
