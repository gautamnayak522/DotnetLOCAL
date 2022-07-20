using System;

namespace addition_lambda
{
    class Program
    {
        static void Main(string[] args)
        {
            Func<int, int, int> Addition = (a,b) => a + b;
            int result = Addition(50, 60);
            Console.WriteLine("Addition is : "+ result);
        }
    }
}
