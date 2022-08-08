using System;
using System.Collections.Generic;

#nullable disable

namespace rolebasedLogin.Models
{
    public partial class Student
    {
        public int StdId { get; set; }
        public string StdName { get; set; }
        public string Address { get; set; }
        public int? Department { get; set; }

        public virtual Department DepartmentNavigation { get; set; }
    }
}
