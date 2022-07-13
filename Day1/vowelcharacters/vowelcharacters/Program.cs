using System;

namespace vowelcharacters
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Enter Your Name : ");
            String name = Console.ReadLine();
            name = name.ToLower();
            Console.WriteLine(name);

            int count=0;
          
            for (int i = 0; i < name.Length; i++)
            {
                if (name[i]=='a'|| name[i] == 'e'|| name[i] == 'i'|| name[i] == 'o'|| name[i] == 'u')
                {
                    count++;
                }
            }
            Console.WriteLine(count);

        }
    }
}
