using System;
using System.IO;

namespace LogoutApp
{
    class Program
    {
        static void Main(string[] args)
        {
            //string path = "~/User/";
            //if (!Directory.Exists())
            //{
            //    Directory.CreateDirectory();
            //}

            FileStream fs = new FileStream(@"C:\Users\gautam.nayak\Desktop\logindata.txt", FileMode.Append, FileAccess.Write);
            StreamWriter sw = new StreamWriter(fs);
            sw.WriteLine("Logout : " + DateTime.Now);
            sw.Close();
            fs.Close();
        }
    }
}
