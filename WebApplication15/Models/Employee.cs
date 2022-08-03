using System;
using System.Collections.Generic;

#nullable disable

namespace WebApplication15.Models
{
    public partial class Employee
    {
        public Employee()
        {
            Cars = new HashSet<Car>();
            InverseManager = new HashSet<Employee>();
        }

        public int Id { get; set; }
        public string Fname { get; set; }
        public string Lname { get; set; }
        public string PhoneNumber { get; set; }
        public int? ManagerId { get; set; }
        public int? DepartmentId { get; set; }
        public int? Salary { get; set; }
        public DateTime? HireDate { get; set; }

        public virtual Department Department { get; set; }
        public virtual Employee Manager { get; set; }
        public virtual ICollection<Car> Cars { get; set; }
        public virtual ICollection<Employee> InverseManager { get; set; }
    }

    public class EmployeeVM
    {
        public int Id { get; set; }
        public string Fname { get; set; }
        public string Lname { get; set; }
        public string PhoneNumber { get; set; }
        public int? ManagerId { get; set; }
        public int? DepartmentId { get; set; }
        public int? Salary { get; set; }
        public DateTime? HireDate { get; set; }

    }
}
