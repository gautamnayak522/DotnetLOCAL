using Microsoft.EntityFrameworkCore;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using WebApplication15.Models;

namespace WebApplication15
{
    public class DataHelper
    {
        private DemoDbContext DbContext { get; set; }
        public DataHelper()
        {
            DbContext = new DemoDbContext();
        }
        public async Task<List<EmployeeVM>> GetEmployees()
        {
            var employees = await (from emp in DbContext.Employees
                                   select new EmployeeVM
                                   {
                                       Id = emp.Id,
                                       Fname = emp.Fname,
                                       Lname = emp.Lname,
                                       DepartmentId = emp.DepartmentId
                                   }).ToListAsync();
            return employees;
        }
        public async Task<EmployeeVM> GetEmployee(int id)
        {
            var employee = await (from emp in DbContext.Employees
                                  where emp.Id == id
                                  select new EmployeeVM
                                  {
                                      Id = emp.Id,
                                      Fname = emp.Fname,
                                      Lname = emp.Lname,
                                      DepartmentId = emp.DepartmentId
                                  }).SingleAsync();
            return employee;
        }
        public async Task<int> AddEmployee(Employee employee)
        {
            DbContext.Add(employee);
            await DbContext.SaveChangesAsync();

            return employee.Id;
        }
        public async Task<int> UpdateEmployee(Employee employee)
        {
            DbContext.Update(employee);
            await DbContext.SaveChangesAsync();

            return employee.Id;
        }
        public async Task<Employee> Get(int id)
        {
            return await DbContext.Employees.Where(x => x.Id == id).FirstOrDefaultAsync();          
        }
    }
}
