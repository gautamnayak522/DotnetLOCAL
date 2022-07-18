using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace assi1
{
    class Mobike
    {
        string Name, bikeNumber;
        int days, charge;
        long mobileno;

        public void Input()
        {
            Console.WriteLine("Enter Bike Number : ");
            bikeNumber = Console.ReadLine();
            Console.WriteLine("Enter Customer Name : ");
            Name = Console.ReadLine();
            Console.WriteLine("Enter Mobile Number : ");
            mobileno = Convert.ToInt64(Console.ReadLine());
            Console.WriteLine("Enter No. of Days : ");
            days = Convert.ToInt32(Console.ReadLine());
            charge = Compute(days);
        }

        public int Compute(int days)
        {
            if (days > 0 && days <= 5)
            {
                return 500 * days;
            }
            else if (days > 5 && days <= 10)
            {
                return (500 * 5) + (400 * (days - 5));
            }
            else if (days > 10)
            {
                return (500 * 5) + (400 * 5) + 200 * (days - 10);
            }
            return 0;
        }
        
        public void Display()
        {
            Console.WriteLine($" Bike Number : {bikeNumber} \t Name : {Name} \t Phone No. : {mobileno} \t No. of Days : {days} \t Charge : {charge}");
        }
     }
 }

