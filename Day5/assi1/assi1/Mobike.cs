using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace assi1
{
    class Mobike
    {
        public string Name, bikeNumber;
        public int days;
        public long mobileno;

        public void Input()
        {
            Console.Write("Enter Bike Number : ");
            bikeNumber = Console.ReadLine();
            Console.Write("Enter Customer Name : ");
            Name = Console.ReadLine();
            Console.Write("Enter Mobile Number : ");
            mobileno = Convert.ToInt64(Console.ReadLine());
            Console.Write("Enter No. of Days : ");
            days = Convert.ToInt32(Console.ReadLine());
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
            Console.WriteLine($"\nBike Number : {bikeNumber} \nName : {Name} \nPhone No. : {mobileno} \nNo. of Days : {days} \nCharge : {Compute(days)} \n\n");
            //Console.WriteLine($"|{bikeNumber,10}|{Name,10}|{mobileno,10}|{days,10}|{Compute(days),10}|");
        }
    }
 }

