using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace studentsrecords
{
    class Student
    {
        public String Name { get; set; }
        public String Address { get; set; }
        public int Hindi { get; set; }
        public int English { get; set; }
        public int Math { get; set; }
        public int total { get { return Hindi + English + Math; } }

        public int avg { get { return total / 3; } }
        public String Grade { get 
            { 
                if (avg > 90) return "A+";
                if (avg > 75) return "A";
                if (avg > 60) return "B";
                if (avg > 40) return "C";
                if (avg > 35) return "D";
                return "F";
            } 
        }
    }
}
