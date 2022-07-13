using System;

namespace assi1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Enter How many Person You Want to Insert ?");
            int n = Convert.ToInt32(Console.ReadLine());

            Person[] persons = new Person[n];
            string fname;
            string lname;
            string email;
            DateTime dob;

            for (int i = 0; i < n; i++)
            {
                Console.WriteLine($"ENter Details of Student {i+1}");
                Console.WriteLine("Enter first Name : ");
                fname = Console.ReadLine();
                Console.WriteLine("Enter Last Name : ");
                lname = Console.ReadLine();
                Console.WriteLine("Enter Email : ");
                email = Console.ReadLine();
                Console.WriteLine("Enter DOB : ");
                dob = Convert.ToDateTime(Console.ReadLine());

                Person p1 = new Person(fname, lname, email, dob.ToString());

                persons[i] = p1;
            }

            foreach (var person in persons)
            {
                Console.WriteLine($"{person.first_name}\t{person.last_name}\t{person.emailaddress}\t{person.date_of_birth}\t{person.Adult}\t{person.bday}\t{person.Sunsign}\t{person.ChineseSign}");
            }

            //Console.WriteLine("Hello World!");
            //Person p1 = new Person("abcd", "aaa", "a@a.com","29-04-1998");
            //Console.WriteLine(p1.first_name+p1.last_name+p1.emailaddress+p1.date_of_birth+p1.Adult+p1.bday+p1.Sunsign+p1.ChineseSign);
        }
    }
}
