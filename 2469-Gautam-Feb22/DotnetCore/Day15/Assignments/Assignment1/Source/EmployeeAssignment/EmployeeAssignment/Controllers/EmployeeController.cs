using EmployeeAssignment.Interfaces;
using EmployeeAssignment.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeeAssignment.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        public IEmployee employeeservice { get; set; }
        public EmployeeController(IEmployee employee)
        {
            employeeservice = employee;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(employeeservice.Get());
        }

        [HttpGet ("{id}")]
        public IActionResult GetByID(int id)
        {
            return Ok(employeeservice.Get(id));
        }

        [HttpPost]
        public IActionResult Post([FromBody] Employee emp)
        {
            return Ok(employeeservice.Post(emp));
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Employee emp = employeeservice.Get(id);
            return Ok(employeeservice.Delete(emp));
        }
        [HttpPut ("{id}")]
        public IActionResult Put(int id,Employee emp)
        {
            var emp1 = employeeservice.Get(id);
            return Ok(employeeservice.Put(emp1, emp));
        }
    }
}
