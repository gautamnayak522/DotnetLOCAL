using System;
using System.Collections;
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



            var ageis9 = personlist.Where((p) => p.Age == 9).ToList();
            
            PrintinLoop(ageis9);

            var singleresult = personlist.Single((p) => p.ID == 101);
            Console.WriteLine(singleresult);

            var singledefresult = personlist.SingleOrDefault((p) => p.ID == 112);
            Console.WriteLine(singledefresult);

           
            var filtersresult = personlist.Where(p => p.Name == "AAA");
            PrintinLoop(filtersresult);


            IList mixedlist = new ArrayList();
            mixedlist.Add(1);
            mixedlist.Add("One");
            mixedlist.Add('C');
            mixedlist.Add(true);
            mixedlist.Add(2);
            mixedlist.Add("two");

            //OfType
            Console.WriteLine(mixedlist);
            foreach (var item in mixedlist.OfType<string>())
            {
                Console.WriteLine(item);
            }



            //Console.WriteLine(personlist.Where);

            foreach (var item in personlist.OrderBy(p=>p.Age))
            {
                Console.WriteLine(item);
            }









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
