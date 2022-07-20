using System;
using System.Collections.Generic;
using System.Linq;

namespace Practice2
{
    class Program
    {
        static void Main(string[] args)
        {
            Person p1 = new Person();
            p1.ID = 101;
            p1.Name = "ABC";
            p1.Age = 25;
            Console.WriteLine(p1.ToString());
            Console.WriteLine("----------------------------------------");

            List<Person> personlist = new List<Person>();
            personlist.Add(p1);
            personlist.Add(new Person() { ID = 102, Name = "AAA", Age = 13 });
            personlist.Add(new Person() { ID = 103, Name = "BBB", Age = 18 });
            personlist.Add(new Person() { ID = 104, Name = "CCC", Age = 60 });
            personlist.Add(new Person() { ID = 105, Name = "DDD", Age = 21 });
            personlist.Add(new Person() { ID = 106, Name = "EEE", Age = 9 });

            Console.WriteLine("Full List");
            foreach (var p in personlist)
            {
                Console.WriteLine(p.ToString());
            }
            Console.WriteLine("----------------------------------------");

            //linq query
            var teenagestudents = from p in personlist
                                  where p.Age > 5 && p.Age < 20
                                  select p;


            Console.WriteLine("p.Age > 5 && p.Age < 20 : LINQ QUERY");
            PrintinLoop(teenagestudents);

            //linq method

            var teenagestudents2 = personlist.Where(p => p.Age > 5 && p.Age < 20).ToList();


            Console.WriteLine("p.Age > 5 && p.Age < 20 : LINQ METHOD");
            PrintinLoop(teenagestudents2);


            var desclist = personlist.OrderByDescending(p => p.Name).Where(p=>p.Age>10).ToList();
            PrintinLoop(desclist);
            //


            






            static void PrintinLoop(IEnumerable<Person> templist)
            {
                foreach (var item in templist)
                {
                    Console.WriteLine(item);
                }
                Console.WriteLine("----------------------------------------");
            }
        }
    }
}
