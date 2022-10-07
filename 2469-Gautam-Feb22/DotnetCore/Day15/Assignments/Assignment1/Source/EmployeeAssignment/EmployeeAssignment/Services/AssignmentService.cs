using EmployeeAssignment.Interfaces;
using EmployeeAssignment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeeAssignment.Services
{
    public class AssignmentService:Repository<Assignment>,IAssignment
    {
        public AssignmentService(EmployeeAssignmentsDBContext context):base(context)
        {

        }
    }
}
