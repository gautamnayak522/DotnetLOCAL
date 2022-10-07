using System;

namespace HospitalManagement
{
    class Program
    {
        static void Main(string[] args)
        {
            
            DataOPS data = new DataOPS();
            while (true)
            {
                Console.WriteLine("------------------------------------------");
                Console.WriteLine("|---------Hospital Management------------|");
                Console.WriteLine("------------------------------------------");
                Console.WriteLine("1. - Enter Doctor Details");
                Console.WriteLine("2. - Update Doctor Details");
                Console.WriteLine("3. - Remove Doctor Details");
                Console.WriteLine("4. - Print Doctor Details");
                Console.WriteLine("5. - Report1 - patient assigned to a particular doctor");
                Console.WriteLine("6. - Report2 - medicine list for a particular patient ");
                Console.WriteLine("7. - Report3 - summary report of Doctor and patient");
                Console.WriteLine("8. - Exit The Application");

                Console.Write("Enter Your Choice : ");
                int choice = Convert.ToInt32(Console.ReadLine());

                Console.WriteLine("-------------------------------------");

                switch (choice)
                {
                    case 1:
                        {
                            data.AddDoctor();
                            break;
                        }
                    case 2:
                        {
                            data.UpdateDoctor();
                            break;
                        }
                    case 3:
                        {
                            data.RemoveDoctor();
                            break;
                        }
                    case 4:
                        {
                            data.printDocorDetails();
                            break;
                        }
                    case 5:
                        {
                            data.PrintReport1();
                            break;
                        }
                    case 6:
                        {
                            data.PrintReport2();
                            break;
                        }
                    case 7:
                        {
                            data.PrintReport3();
                            break;
                        }
                    case 8:
                        {
                            break;
                        }
                }
                if (choice == 8)
                {
                    break;
                }

            }
            
        }
    }
}
