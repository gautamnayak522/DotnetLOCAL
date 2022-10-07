using System;
using System.Collections.Generic;

#nullable disable

namespace HospitalManagement.Models
{
    public partial class Department
    {
        public Department()
        {
            Assistants = new HashSet<Assistant>();
            Doctors = new HashSet<Doctor>();
        }

        public int DeptId { get; set; }
        public string DepatName { get; set; }

        public virtual ICollection<Assistant> Assistants { get; set; }
        public virtual ICollection<Doctor> Doctors { get; set; }
    }
}
