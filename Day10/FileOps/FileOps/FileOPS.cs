using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FileOps
{
    class FileOPS
    {
        public void writefile()
        {
            FileStream fs = new FileStream(@"C:\Users\gautam.nayak\Desktop\DotnetLOCAL\Day10\FileOps\FileOps\Files\test.txt", FileMode.Append, FileAccess.Write);
            StreamWriter sw = new StreamWriter(fs);
            Console.WriteLine("Enter Content of file");
            string str = Console.ReadLine();
            sw.WriteLine(str);
            sw.Close();
            fs.Close();
        }

        public void readFile()
        {
            FileStream fs = new FileStream(@"C:\Users\gautam.nayak\Desktop\DotnetLOCAL\Day10\FileOps\FileOps\Files\test.txt", FileMode.Open, FileAccess.Read);
            StreamReader sr = new StreamReader(fs);
            
            var data = sr.ReadToEnd();
            Console.WriteLine(data);


            //while (data != null)
            //{
            //    Console.WriteLine(data);
            //    data = sr.ReadLine();
            //}
           

            sr.Close();
            fs.Close();
        }
    }
}
