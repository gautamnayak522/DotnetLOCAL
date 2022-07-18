using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Assi1
{
    class Student
    {
        int id, Age;
        string name;
        DateTime dob;
        public void get()
        {
              try
                {
                    Console.Write("Enter Id : ");
                    id = Convert.ToInt32(Console.ReadLine());
                    
                    while (true)
                    {
                        try
                        {
                            Console.Write("Enter Name : ");
                            name = Console.ReadLine();
                            NameException.validate(name);
                            break;
                        }
                        catch (NameException ne)
                        {
                            Console.WriteLine(ne.Message);
                        }
                    }
                    while (true)
                    {
                        try
                        {
                            Console.Write("Enter Age : ");
                            Age = Convert.ToInt32(Console.ReadLine());
                            AgeException.validate(Age);
                            break;
                        }
                        catch (AgeException ae)
                        {
                            Console.WriteLine(ae.Message); 
                        }
                    }

                    while (true)
                    {
                        try
                        {
                            Console.Write("Enter DOB : ");
                            dob = Convert.ToDateTime(Console.ReadLine());
                            DateException.validate(dob);
                            break;
                        }
                        catch (DateException dt)
                        {
                            Console.WriteLine(dt.Message);
                        }
                    }
                }
                catch (Exception e)
                {
                    Console.WriteLine(e.Message);
                }
            }
        

        public void Display()
        {
            Console.WriteLine($"ID : {id} \nName : {name}\nAge : {Age}\nDOB : {dob.ToShortDateString()}");
        }


    }
}
