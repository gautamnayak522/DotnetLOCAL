using EmployeeAssignment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeeAssignment.Interfaces
{
    public interface IEmployee:IRepository<Employee>
    {
    }
}
