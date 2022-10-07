using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace practice1
{
    class Employee
    {
       
            private string Name;
            public int Age;

            public string PName { get { return Name; } set { Name = value; } }
            
            public bool eligible { get { if (Age >= 18) return true; else return false; } } 

            public Employee(string name, int age)
            {
                Name = name;
                Age = age;
            }
        
    }
}
