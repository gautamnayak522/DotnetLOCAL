using System;
using System.IO;
using System.Linq;

namespace LoginApp
{
    class Program
    {
        static void Main(string[] args)
        {

            string last = File.ReadAllLines(@"C:\Users\gautam.nayak\Desktop\logindata.txt").Last();
            Console.WriteLine(last.Substring(9));
            DateTime logouttime = Convert.ToDateTime(last.Substring(9));

            int breakcount = Convert.ToInt32( (DateTime.Now - logouttime).TotalSeconds);

            TimeSpan t = TimeSpan.FromSeconds(breakcount);
            string answer = string.Format("{0:D2}h:{1:D2}m:{2:D2}s:{3:D3}ms",
                            t.Hours,
                            t.Minutes,
                            t.Seconds,
                            t.Milliseconds);
            Console.WriteLine(answer);

            //string str = t.ToString(@"hh\:mm\:ss");
            //Console.WriteLine(str);


            FileStream fs = new FileStream(@"C:\Users\gautam.nayak\Desktop\logindata.txt", FileMode.Append, FileAccess.Write);
            StreamWriter sw = new StreamWriter(fs);
            sw.WriteLine("------------------------------");
            sw.WriteLine("Break : " + answer);
            sw.WriteLine("------------------------------");
            sw.WriteLine("Login  : " + DateTime.Now);
            sw.Close();
            fs.Close();
        }
    }
}
