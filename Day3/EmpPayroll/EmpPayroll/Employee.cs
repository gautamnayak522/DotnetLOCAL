using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EmpPayroll
{
    interface Emp
    {
        void get();
        void Display();
        int countsalary();
    }

    abstract class Employee:Emp
    {
        int EmpID=0;
        string Name, Address, PanNo;
        public virtual void get()
        {
            this.EmpID = EmpID + 1;
            Console.WriteLine("Enter Name : ");
            this.Name = Console.ReadLine();
            Console.WriteLine("Enter Address : ");
            this.Address = Console.ReadLine();
            Console.WriteLine("Enter Pan No : ");
            this.PanNo = Console.ReadLine();
        }
        public virtual void Display()
        {
            Console.WriteLine($"EmployeeId : {this.EmpID} \nName : {this.Name} \nAddress : {this.Address} \nPan NO : {this.PanNo}");
        }
        public abstract int countsalary();

    }
    class Fulltime : Employee
    {
        int basic,hra,ta,da;
        public override void  get()
        {
            base.get();
            Console.WriteLine("Enter Basic Salary : ");
            basic = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter HRA : ");
            hra = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter TA : ");
            ta = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter DA : ");
            da = Convert.ToInt32(Console.ReadLine());
        }
        public override void Display()
        {
            base.Display();
            Console.WriteLine("Salary of Employee is " + countsalary());
        }

        public override int countsalary()
        {
            return basic + hra + ta + da;
            // Console.WriteLine($"Salary of Employee is : {basic+hra+ta+da}");

        }
    }
    class Parttime : Employee
    {
        int noofhours, salperhour;
        public override void get()
        {
            base.get();
            Console.WriteLine("Enter No.of Hours : ");
            noofhours = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter Salary Per Hours : ");
            salperhour = Convert.ToInt32(Console.ReadLine());
        }
        public override void Display()
        {
            base.Display();
            Console.WriteLine("Salary of Employee is " + countsalary());
        }

        public override int countsalary()
        {
            return noofhours * salperhour;
            //Console.WriteLine($"Salary of Employee is : {noofhours * salperhour}");

        }
    }
}
