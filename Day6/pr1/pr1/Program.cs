using System;

namespace pr1
{
    public delegate void delegate1(string str);
   
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

            add(2, 3);
            sub(2, 3);
            mul(2, 3);

            Func<int, int, int> calc = new Func<int, int, int>;
           
            int result = calc(5,6);




        }
        static void Display(string str)
        {
            Console.WriteLine(str);
        }
        static void Display2(string str)
        {
            Console.WriteLine(str + " Have a Nice Day");
        }
        static void add(int a, int b)
        {
            Console.WriteLine($"{a} + {b} = {a+b}");
        }
        static void sub(int a, int b)
        {
            Console.WriteLine($"{a} - {b} = {a-b}");
        }
        static void mul(int a, int b)
        {
            Console.WriteLine($"{a} * {b} = {a * b}");
        }
    }
}
