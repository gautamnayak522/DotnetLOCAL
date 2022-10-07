using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practice3
{
    class Student
    {
        public int ID { get; set; }
        public string StudentName { get; set; }
        public int StandardID { get; set; }

        public override string ToString()
        {
            return $"ID : {ID}, Name : {StudentName}, Standard : {StandardID}";
        }
    }
}
