using System;

namespace studentsrecords
{
    class Program
    {
        static void my_method()
        {
            Console.WriteLine("Student Details");
            Console.WriteLine("----------------------------------");
        }

        static void Main(string[] args)
        {
            my_method();
           
            Console.WriteLine("Enter No. of Students");
            int n = Convert.ToInt32( Console.ReadLine());
            
            Student[] stds= new Student[n];

            for (int i = 0; i < n; i++)
            {
                
                Console.WriteLine($"Enter Details of Student{i+1}");

                Student std1 = new Student();

                Console.WriteLine("Enter Name of Student");
                std1.Name = Console.ReadLine();
                Console.WriteLine("Enter Address : ");
                std1.Address = Console.ReadLine();
                Console.WriteLine("Enter Hindi Marks : ");
                std1.Hindi = Convert.ToInt32(Console.ReadLine());
                Console.WriteLine("Enter English Marks : ");
                std1.English = Convert.ToInt32(Console.ReadLine());
                Console.WriteLine("Enter Math Marks : ");
                std1.Math = Convert.ToInt32(Console.ReadLine());
                stds[i] = std1;
            }

          
            Console.WriteLine($"{"Name".PadRight(10)} {"Address".PadRight(10)}\t{"Hindi"}\t{"English"}\t{"Math"}\t{"total"}\t{"Grade"}\t");

            foreach (var s in stds)
            {
                Console.WriteLine("-----------------------------------------------------------------");
                Console.WriteLine($"{s.Name.PadRight(10)} {s.Address.PadRight(10)}\t{s.Hindi}\t{s.English}\t{s.Math}\t{s.total}\t{s.Grade}\t");
            }

        }   

    }
}
