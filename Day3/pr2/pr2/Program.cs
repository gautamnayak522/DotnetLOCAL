using System;

namespace pr2
{
    class Program
    {
        static void Main(string[] args)
        {
            Saving acc1 = new Saving(101, 101, "abcd", 5000, 25);
            Console.WriteLine($"{acc1.accID},{acc1.custID},{acc1.custName},{acc1.Balance},{acc1.intRate}");

            Current acc2 = new Current(101, 101, "abcd", 5000, 25);
            Console.WriteLine($"{acc2.accID},{acc2.custID},{acc2.custName},{acc2.Balance},{acc2.chargeRate}");

            Account acc3 = new Saving(104, 101, "abcd", 5000, 25);
          
        }
    }
}
