using EmployeeAssignment.Interfaces;
using EmployeeAssignment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeeAssignment.Services
{
    public class EmployeeService:Repository<Employee>,IEmployee
    {
        public EmployeeService(EmployeeAssignmentsDBContext context):base(context)
        {

        }
    }
}
