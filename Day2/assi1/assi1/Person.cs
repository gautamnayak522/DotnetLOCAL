using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace assi1
{
    public class Person
    {
        public Person(string fname,string lname,string email,string dt)
        {
            first_name = fname;
            last_name = lname;
            emailaddress = email;
            date_of_birth = Convert.ToDateTime(dt);
        }
        public string first_name { get; set; }
        public string last_name { get; set; }
        public string emailaddress { get; set; }
        public DateTime date_of_birth { get; set; }
        public Boolean Adult { get { if (DateTime.Now.Year - date_of_birth.Year >= 18) { return true; } else { return false; } }}
        public Boolean bday { get { if (DateTime.Today == date_of_birth) { return true; } else { return false; } } }
    }
}
