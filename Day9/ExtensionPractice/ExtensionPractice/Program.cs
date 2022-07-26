using System;

namespace ExtensionPractice
{
    static class ExtensionMethods
    {
        public static int CountVowels(this string str)
        {
            int count = 0;
            foreach (var item in str.ToLower())
            {
                if (item == 'a' || item == 'e' || item == 'i' || item == 'o' || item == 'u')
                {
                    count++;
                }
            }
            return count;
        }
    }
    class Program
    {
        static void Main(string[] args)
        {

            string a = "abcdefghijklmnopqrstuvwxyz";
            Console.WriteLine(a.CountVowels());

            Console.WriteLine(ExtensionMethods.CountVowels("Hello"));
            
        }
    }
}
