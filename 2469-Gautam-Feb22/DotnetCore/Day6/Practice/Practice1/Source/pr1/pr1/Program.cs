using System;

namespace pr1
{
    public delegate void delegate1(string str);
    public delegate void delegatecalc(int a, int b);
   
    class Program
    {
        static void Main(string[] args)
        {
            
            //delegate1
            delegate1 dl1 = new delegate1(Display);
            dl1.Invoke("Good Morning");

            dl1 += Display2;
            dl1.Invoke("Very Good Morning");

            delegate1 dl2 = (string str) => Console.WriteLine(str + " with lambda function");
            dl1 += dl2;

            dl1.Invoke("V. Very Good Morning");


            //delegete2

            //delegatecalc calc = add;
            //calc.Invoke(5,5);
            //calc+=sub;
            //calc += mul;
            //calc.Invoke(2, 2);

            Func<int, int> square = (x) => (x * x);
            Console.WriteLine(square(5));


            Func<int, int, string> calc = add;
            Console.WriteLine(calc(5, 6));

            calc = sub;
            Console.WriteLine(calc(5, 6));
            
            calc = mul;
            Console.WriteLine(calc(5, 6));


            //int result = calc(5,6);
            //Console.WriteLine(result);
        }
        static void Display(string str)
        {
            Console.WriteLine(str);
        }
        static void Display2(string str)
        {
            Console.WriteLine(str + " Have a Nice Day");
        }
        static string add(int a, int b)
        {
            return $"{a}+{b}={a + b}";
            //return a + b;
            //Console.WriteLine($"{a} + {b} = {a+b}");
        }
        static string sub(int a, int b)
        {
            return $"{a}-{b}={a - b}";
            //Console.WriteLine($"{a} - {b} = {a-b}");
        }
        static string mul(int a, int b)
        {
            return $"{a}*{b}={a * b}";
            //Console.WriteLine($"{a} * {b} = {a * b}");
        }
    }
}
