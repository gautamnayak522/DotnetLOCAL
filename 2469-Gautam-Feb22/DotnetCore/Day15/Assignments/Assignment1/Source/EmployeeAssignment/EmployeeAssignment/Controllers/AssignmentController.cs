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
    [Route("emps/{empID}/child/[Controller]")]
    [ApiController]
    public class AssignmentController : ControllerBase
    {
        public IAssignment assignmentservice { get; set; }
        public AssignmentController(IAssignment assignment)
        {
            assignmentservice = assignment;
        }


        [HttpGet]
        public IActionResult Get(int empID)
        {
            return Ok(assignmentservice.Get().Where(x=>x.EmployeeId==empID));
        }

        [HttpGet("{id}")]
        public IActionResult GetByID(int id)
        {
            return Ok(assignmentservice.Get(id));
        }

        [HttpPost]
        public IActionResult Post([FromBody] Assignment assi)
        {
            return Ok(assignmentservice.Post(assi));
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Assignment assi = assignmentservice.Get(id);
            return Ok(assignmentservice.Delete(assi));
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Assignment assi)
        {
            var assi1 = assignmentservice.Get(id);
            return Ok(assignmentservice.Put(assi1, assi));
        }
    }
}
