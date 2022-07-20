using System;

namespace areaofrect
{
    class Program
    {
        static void Main(string[] args)
        {

            Func<int,int,int> calculate = area_of_rect;
            int result = calculate(10, 20);
            Console.WriteLine(result);
           
        }

        public static int area_of_rect(int a,int b)
        {
            return a * b;
        }
    }
}
