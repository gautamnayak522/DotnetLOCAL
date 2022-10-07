using System;
using System.Collections.Generic;

namespace assi1
{
    class Program
    {
        static void Main(string[] args)
        {
            var listofbikesonrent = new List<Mobike>();
            Console.WriteLine("---------Mobike Rental Service---------------");

            while (true)
            {

                Console.WriteLine(new string('-',45));
                Console.WriteLine("1 : Add new Customer");
                Console.WriteLine("2 : Display All Customers");
                Console.WriteLine("3 : Search bike number Customers");
                Console.WriteLine("4 : Remove bike number");
                Console.WriteLine("5 : Edit Details");
                Console.WriteLine("6 : Close Application");

                Console.Write("SELECT --> : ");
                
                int choice = Convert.ToInt32(Console.ReadLine());


                switch (choice)
                {
                    case 1:
                        {
                            Mobike mb = new Mobike();
                            mb.Input();
                            listofbikesonrent.Add(mb);
                            Console.WriteLine("Bike Assigned to Customer");
                            break;
                        }
                    case 2:
                        {
                            if(listofbikesonrent.Count==0)
                            {
                                Console.WriteLine("List is Empty");
                            }
                            foreach (var el in listofbikesonrent)
                                el.Display();
                             break;
                        }
                    case 3:
                        {
                            Console.WriteLine("Enter Bike Number to Search : ");
                            string bikenumber = Console.ReadLine();
                            bool found = false;
                            foreach (var record in listofbikesonrent)
                            {
                                if(record.bikeNumber==bikenumber)
                                {
                                    record.Display();
                                    found = true;
                                }
                       
                            }
                            if(!found)
                            {
                                Console.WriteLine("Bike Number is Incorrect / Not Found");
                            }
                            break;
                        }
                    case 4:
                        {
                            Console.WriteLine("Enter Bike Number to Remove : ");
                            string bikenumber = Console.ReadLine();
                            Mobike result = null;
                            foreach (var record in listofbikesonrent)
                            {
                                if (record.bikeNumber == bikenumber)
                                {
                                    result = record;
                                }
                            }
                            listofbikesonrent.Remove(result);
                            break;
                        }
                    case 5:
                        {
                            Console.WriteLine("Enter Bike Number to Edit : ");
                            string bikenumber = Console.ReadLine();

                            foreach (var record in listofbikesonrent)
                            {
                                if (record.bikeNumber == bikenumber)
                                {
                                    Console.WriteLine($"Edit CustomerName ({record.Name}) : ");
                                    record.Name = Console.ReadLine();
                                    Console.WriteLine($"Edit MobileNumber ({record.mobileno}) : ");
                                    record.mobileno = Convert.ToInt64(Console.ReadLine());
                                    Console.WriteLine($"Edit Days ({record.days}) : ");
                                    record.days = Convert.ToInt32(Console.ReadLine());
                                }
                            }
                            break;
                        }
                    case 6:
                        {
                            break;
                        }
                    default:
                        {
                            Console.WriteLine("Invalid Choice");
                            break;
                        }
                }

                if (choice == 6)
                {
                    break;
                }
            }
        }
    }
}
