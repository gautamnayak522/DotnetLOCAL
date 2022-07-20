using System;
using System.Linq;

namespace LINQPractice
{
    class Program
    {
        static void Main(string[] args)
        {
            //1
            string[] listofname = { "obama", "trump", "byden" };

            var myLinQQuery = from name in listofname
                              where name.Length == 5
                              select name;

            foreach (var name in myLinQQuery)
            {
                Console.WriteLine(name + " ");
            }

            //2

            int[] nums = new int[] { 0, 1, 2, 10, 15, 18, 20, 25, 9, 0, 10, 15 };

            Console.Write("List : ");
            foreach (var item in nums)
            {
                Console.Write(item + " ");
            }
            Console.WriteLine();

            Console.Write("Less Than 10 : ");
            var res = from a in nums where a <= 10 orderby a descending select a;
            

            foreach (int i in res)
                Console.Write(i + " ");


            //count
            var count = nums.Count();
            Console.WriteLine("\nCount : " + count);

            //Distinct count

            var distcount = nums.Distinct().Count();
            Console.WriteLine("DistCount : " + distcount);

            var oddnums = nums.Count(n => n % 2 == 1);
            Console.WriteLine("Odd Nums COUNT : " + oddnums);

            var listofoddnums = from n in nums where n % 2 == 1 select n;

            Console.Write("List of Odd Numbres : ");
            foreach (var n in listofoddnums)
            {
                Console.Write($" {n} ");
            }



            Person p = new Person();
            p.name = "Abc";
            p.Age = 25;
            Console.WriteLine("\n" + p.ToString());

        }

    }
}
