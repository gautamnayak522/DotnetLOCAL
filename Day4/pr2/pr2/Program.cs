using System;

namespace pr2
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            string text = "This is a \"string\" in C#.";
            string text2 = @"This is a  ""string"" in C#.";
            Console.WriteLine(text);
            Console.WriteLine(text2);


            DateTime dt = DateTime.Now;
            Console.WriteLine(dt);
            DateTime dt2 = DateTime.Today;
            Console.WriteLine(dt2);

            Console.WriteLine(dt.Day);
            Console.WriteLine(dt.Month);
            Console.WriteLine(dt.Year);

            Console.WriteLine( dt.AddMonths(2) );

            DateTime dob = new DateTime(2001,04,08);
            Console.WriteLine(dob);

            DateTime dob2 = Convert.ToDateTime("08-04-2001");
            Console.WriteLine(dob2);

            Console.WriteLine(dob2.DayOfWeek);

            Console.WriteLine("d: " + dob.ToString("d"));
            Console.WriteLine("D: " + dob.ToString("D"));
            Console.WriteLine("f: " + dob.ToString("f"));
            Console.WriteLine("F: " + dob.ToString("F"));
            Console.WriteLine("g: " + dob.ToString("g"));
            Console.WriteLine("G: " + dob.ToString("G"));
            Console.WriteLine("m: " + dob.ToString("m"));
            Console.WriteLine("M: " + dob.ToString("M"));
            Console.WriteLine("o: " + dob.ToString("o"));
            Console.WriteLine("O: " + dob.ToString("O"));
            Console.WriteLine("r: " + dob.ToString("r"));
            Console.WriteLine("R: " + dob.ToString("R"));
            Console.WriteLine("s: " + dob.ToString("s"));
            Console.WriteLine("t: " + dob.ToString("t"));
            Console.WriteLine("T: " + dob.ToString("T"));
            Console.WriteLine("u: " + dob.ToString("u"));
            Console.WriteLine("U: " + dob.ToString("U"));
            Console.WriteLine("y: " + dob.ToString("y"));
            Console.WriteLine("Y: " + dob.ToString("Y"));




        }
    }
}
