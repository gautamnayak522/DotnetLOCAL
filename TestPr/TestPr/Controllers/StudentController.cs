using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TestPr.Models;

namespace TestPr.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        public IStudent studentservice { get; set; }
        public StudentController(IStudent service)
        {
            studentservice = service;
        }

        [Authorize]
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(studentservice.Get());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok(studentservice.Get(id));
        }

        [HttpPost]

        public IActionResult Post(Student s)
        {
            return Ok(studentservice.Post(s));
        }

        [HttpPut]

        public IActionResult Put(Student s)
        {
            Student oldstudent = studentservice.Get(s.StdId);
            return Ok(studentservice.Put(oldstudent, s));
        }

        [HttpDelete]
        public IActionResult Delete(int id)
        {
            Student deletestudent = studentservice.Get(id);
            return Ok(studentservice.Delete(deletestudent));
        }
    }
}
