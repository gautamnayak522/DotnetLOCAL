using System;
using System.Collections.Generic;

#nullable disable

namespace HospitalManagement.Models
{
    public partial class Doctor
    {
        public Doctor()
        {
            Patients = new HashSet<Patient>();
        }

        public int DoctorId { get; set; }
        public string DoctorName { get; set; }
        public int? DeptId { get; set; }

        public virtual Department Dept { get; set; }
        public virtual ICollection<Patient> Patients { get; set; }

        public override string ToString()
        {
            return $"{DoctorId} \t        {DoctorName}  \t        {DeptId}";
        }
    }
}
