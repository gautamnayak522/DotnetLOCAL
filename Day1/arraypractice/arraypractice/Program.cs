using System;

namespace arraypractice
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            String[] cities = { "aa", "bb", "cc" };
            Console.WriteLine($"{cities[0]},{cities[1]}");


            for (int i = 0; i < cities.Length; i++)
                Console.WriteLine(cities[i]);

            Console.WriteLine("------------------");

            foreach (var city in cities)
                Console.Write(city + " ");


            int[,] array2dm = {
                {1,2},{3,4}
            };
                Console.WriteLine();
            
            Console.WriteLine(array2dm.Length);
            Console.WriteLine(array2dm.Rank);

            for (int i = 0; i < array2dm.GetLength(0); i++)
            {
                for (int j = 0; j < array2dm.GetLength(1); j++)
                {
                    Console.Write(array2dm[i, j]+" ");

                }
                Console.WriteLine();
            }
        }
    }
}
