using System;

namespace pr1
{
    class Program
    {
        static void Main(string[] args)
        {
            try
            {

                Console.WriteLine("Enter First Number : ");
                int a = Convert.ToInt32(Console.ReadLine());
                Console.WriteLine("Enter Second Number : ");
                int b = Convert.ToInt32(Console.ReadLine());

                Console.WriteLine("Division is : " + a / b);

                while (true)
                {
                    try
                    {
                        Console.WriteLine("Enter Age");
                        int age = Convert.ToInt32(Console.ReadLine());

                        AgeException.validate(age);
                        break;
                    }
                    catch (AgeException ae)
                    {
                        Console.WriteLine(ae.Message);
                    }
                }
            }
            
            catch(DivideByZeroException ex)
            {
                Console.WriteLine("Not possible divisoin by Zero");
            }
        }
    }
}
