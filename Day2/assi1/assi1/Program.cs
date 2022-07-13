using System;

namespace assi1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            Person p1 = new Person("abcd", "aaa", "a@a.com","13-07-2022");
            Console.WriteLine(p1.first_name+p1.last_name+p1.emailaddress+p1.date_of_birth+p1.Adult+p1.bday);
        }
    }
}
