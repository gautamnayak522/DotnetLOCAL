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

            Console.WriteLine($"{"first_name",5}\t{"last_name",5}\t{"emailaddress",5}\t{"date_of_birth",5}\t{"Adult?",5}\t{"Birthday?",5}\t{"Sunsign",5}\t{"ChineseSign",5}\t{"Screen_name",5}");

            foreach (var person in persons)
            {
                Console.WriteLine($"{person.first_name,5}\t{person.last_name,5}\t{person.emailaddress,5}\t{person.date_of_birth.Date,5}\t{person.Adult,5}\t{person.bday,5}\t{person.Sunsign,5}\t{person.ChineseSign,5}\t{person.Screen_name,5}");
            }
            

            //Console.WriteLine("Hello World!");
            //Person p1 = new Person("abcd", "aaa", "a@a.com","29-04-1998");
            //Console.WriteLine(p1.first_name+p1.last_name+p1.emailaddress+p1.date_of_birth+p1.Adult+p1.bday+p1.Sunsign+p1.ChineseSign);
        }
    }
}
