using System;
using System.Collections.Generic;
using System.Linq;

namespace Assi1
{
    class Program
    {
        static void Main(string[] args)
        {
            List<Employee> Employees = new List<Employee>()
            {
                new Employee() { ID = 1, FirstName ="John", LastName ="Abraham", Salary = 1000000, JoiningDate = new DateTime(2013, 1, 1), Deparment ="Banking"},
                new Employee() { ID = 2, FirstName ="Michael", LastName ="Clarke", Salary = 800000, JoiningDate = new DateTime(), Deparment ="Insurance" },
                new Employee() { ID = 3, FirstName ="oy", LastName ="Thomas", Salary = 700000, JoiningDate = new DateTime(), Deparment ="Insurance"},
                new Employee() { ID = 4, FirstName ="Tom", LastName ="Jose", Salary = 600000, JoiningDate = new DateTime(), Deparment ="Banking"},
                new Employee() { ID = 5, FirstName ="TestName2", LastName ="Lname %", Salary = 600000, JoiningDate = new DateTime(2013, 1, 1), Deparment ="Services"}
            };

            List<Incentive> Incentives = new List<Incentive>()
            {
                new Incentive() { ID = 1, IncentiveAmount = 5000, IncentiveDate = new DateTime(2013, 02, 02) },
                new Incentive() { ID = 2, IncentiveAmount = 10000, IncentiveDate = new DateTime(2013, 02, 4) },
                new Incentive() { ID = 1, IncentiveAmount = 6000, IncentiveDate = new DateTime(2012, 01, 5) },
                new Incentive() { ID = 2, IncentiveAmount = 3000, IncentiveDate = new DateTime(2012, 01, 5) }
            };

            foreach (var item in Employees)
            {
                Console.WriteLine(item);
            }
            Console.WriteLine("-----------------------------");
            foreach (var item in Incentives)
            {
                Console.WriteLine(item);
            }

            //1.Get employee details from employees object whose employee name is “John” (note restrict operator)

            var johnnamedemps = Employees.Where(e => e.FirstName == "John").Single();
            Console.WriteLine(johnnamedemps);

            //var johnnamedemps2 = Employees.Where(e => e.FirstName == "John");
            //foreach (var item in johnnamedemps2)
            //{
            //    Console.WriteLine(item);
            //}


            //2. Get FIRSTNAME,LASTNAME from employees object(note project operator)

            var q2 = Employees.Select(e => new { FirstName = e.FirstName, LastName = e.LastName });

            foreach (var item in q2)
            {
                Console.WriteLine(item);
            }

            //3. Select FirstName, IncentiveAmount from employees and incentives object for those employees who have incentives.(join operator)

            var q3 = Employees.Join(Incentives,
                            e => e.ID,
                            i => i.ID,
                            (e, i) => new
                            {
                                FirstName = e.FirstName,
                                i.IncentiveAmount
                            });

            foreach (var item in q3)
            {
                Console.WriteLine($"{item.FirstName}, {item.IncentiveAmount}");
            }


            //4. Get department wise maximum salary from employee table order by salary ascending (note group by)


            var q4 = Employees.GroupBy(e => e.Deparment).Select(e => new { Department = e.Key, MaxSalary = e.Max(e => e.Salary) }).OrderBy(e=>e.MaxSalary);

            foreach (var item in q4)
            {
                Console.WriteLine(item);
            }

            Console.WriteLine("------------------------");

            //5. Select department, total salary with respect to a department from employees object where total salary greater than 800000
            //order by TotalSalary descending(group by having)

            var q5 = Employees.GroupBy(e => e.Deparment).Select(e=> new {Department = e.Key,TotalSalary = e.Sum(e=>e.Salary)}).Where(e=>e.TotalSalary> 800000).OrderByDescending(e=>e.TotalSalary);

            foreach (var item in q5)
            {
                Console.WriteLine(item);
            }
        }
    }
}

