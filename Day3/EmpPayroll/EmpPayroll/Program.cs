using System;

namespace EmpPayroll
{
    class Program
    {
        static void Main(string[] args)
        {
            Employee emp1 = new Parttime();
            emp1.get();
            emp1.Display();

            Console.WriteLine("------------------------");
            emp1 = new Fulltime();
            emp1.get();
            emp1.Display();
        }
    }
}
