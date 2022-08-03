using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using WebApplication15.Models;

namespace WebApplication15
{
    public interface IEmployeeService : IRepository<Employee>
    {
        Employee Add(Employee employee);
    }
    public class EmployeeService : Repository<Employee>, IEmployeeService
    {
        public EmployeeService(DemoDbContext demoDbContext, IDepartmentService departmentService) : base(demoDbContext)
        {
        }
        public Employee Add(Employee employee)
        {
            base.Add(employee);
            return employee;
        }

    }
}
