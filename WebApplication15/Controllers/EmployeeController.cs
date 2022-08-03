using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using WebApplication15.Models;

namespace WebApplication15.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
  
    public class EmployeeController : ControllerBase
    {

        private DataHelper DataHelper { get; set; }
        private IEmployeeService EmployeeService { get; set; }
        public EmployeeController(IEmployeeService employeeService, IDepartmentService departmentService )
        {
            DataHelper = new DataHelper();
            EmployeeService = employeeService;
        }

        [HttpGet]
        [RequestActionFilter(RequiredRole="Admin")]
        public async Task<IActionResult> Get()
        {
            return Ok(await DataHelper.GetEmployees());
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            return Ok(await DataHelper.GetEmployee(id));
        }

        [HttpPost]
        public IActionResult Post([FromBody] Employee employee)
        {

            var arr = new List<string>();
            if (string.IsNullOrEmpty(employee.Fname))
            {
                arr.Add("Fnameis required");
            }
            if (arr.Count > 0)
                return BadRequest(arr);
            else
                return Ok(EmployeeService.Add(employee));
        }

        [HttpPatch("{id}")]
        public async Task<IActionResult> Patch(int id, [FromBody] JsonPatchDocument<Employee> patchEmployee)
        {
            var employee = await DataHelper.Get(id);
            patchEmployee.ApplyTo(employee);
            return Ok(await DataHelper.UpdateEmployee(employee));
        }
    }
}
