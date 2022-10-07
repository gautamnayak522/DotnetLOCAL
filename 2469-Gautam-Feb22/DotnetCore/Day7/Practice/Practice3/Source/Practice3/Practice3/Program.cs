using System;
using System.Collections.Generic;
using System.Linq;

namespace Practice3
{
    class Program
    {
        static void Main(string[] args)
        {
            List<Person> personlist = new List<Person>();
            personlist.Add(new Person() { ID = 101, Name = "ABC", Age = 18 });
            personlist.Add(new Person() { ID = 102, Name = "AAA", Age = 13 });
            personlist.Add(new Person() { ID = 103, Name = "BBB", Age = 25 });
            personlist.Add(new Person() { ID = 104, Name = "CCC", Age = 18 });
            personlist.Add(new Person() { ID = 105, Name = "DDD", Age = 13 });
            personlist.Add(new Person() { ID = 106, Name = "EEE", Age = 9 });



            foreach (var item in personlist)
            {
                Console.WriteLine(item.ToString());
            }

            Console.WriteLine("-------------------------");

            //Order By

            var orderbydescname = personlist.OrderByDescending(p => p.Name);

            foreach(var item in orderbydescname)
            {
                Console.WriteLine(item);
            }

            Console.WriteLine("-------------------------");


            //Group By

                    var groupbyage = from p in personlist
                                     group p by p.Age;
            
            foreach (var item in groupbyage)
            {
                Console.WriteLine( $"Group of {item.Key}");
                foreach (var i in item)
                {
                    Console.WriteLine(i);
                }
            }

            Console.WriteLine("-------------------------");


                    var groupbyage2 = personlist.GroupBy(p => p.Age);
            
            foreach (var item in groupbyage2)
            {
                Console.WriteLine($"Group of {item.Key}");
                foreach (var i in item)
                {
                    Console.WriteLine(i);
                }
            }

            Console.WriteLine("--------------------");

            var groupbyname = personlist.Where(p => p.Age >= 18).GroupBy(p=>p.Name);

            foreach (var item in groupbyname)
            {
                Console.WriteLine($"Group of {item.Key}");
                foreach (var i in item)
                {
                    Console.WriteLine(i);
                }
            }


            //Join

            Console.WriteLine("=================JOIN=====================");

            List<Student> studentlist = new List<Student>()
            {
                new Student() { ID = 1 , StudentName = "Gautam", StandardID = 10},
                new Student() { ID = 2 , StudentName = "Yash", StandardID = 11},
                new Student() { ID = 3 , StudentName = "Saumya", StandardID = 12},
                new Student() { ID = 4 , StudentName = "Jeet", StandardID = 10},
            };

            List<Standard> standardlist = new List<Standard>()
            {
                new Standard() { StandardID = 10 , Name = "ten"},
                new Standard() { StandardID = 11 , Name = "eleven"},
                new Standard() { StandardID = 12 , Name = "twelve"},
            };


            foreach (var item in studentlist)
            {
                Console.WriteLine(item.ToString());
            }
            foreach (var item in standardlist)
            {
                Console.WriteLine(item);
            }

            var StudentStandard = studentlist.Join(
                                           standardlist,
                                           student => student.StandardID,
                                           standard => standard.StandardID,
                                           (student, standard) => new
                                           {
                                               StudentName = student.StudentName,
                                               Name = standard.Name
                                           });


            foreach (var obj in StudentStandard)
            {
                Console.WriteLine($"{obj.StudentName},{obj.Name}");
            }

            //Select

            var selectresult = studentlist.Select(s => new
            {
                Name = s.StudentName,
                Id = s.ID,
                Standard = s.StandardID
            });

            foreach (var res in selectresult)
            {
                Console.WriteLine(res);
            }
        }
    }
}
