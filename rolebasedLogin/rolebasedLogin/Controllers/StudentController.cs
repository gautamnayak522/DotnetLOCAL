using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using rolebasedLogin.Interfaces;
using rolebasedLogin.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace rolebasedLogin.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class StudentController : ControllerBase
    {
        public IStudent StudentService { get; set; }
        public StudentController(IStudent service)
        {
            StudentService = service;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(StudentService.Get());
        }

        [HttpPost]
        public IActionResult Post(Student u)
        {
            return Ok(StudentService.Post(u));
        }


        [Authorize(Roles ="Admin")]

        [HttpGet ("{id}")]
        public IActionResult Get(int id)
        {
            return Ok(StudentService.Get(id));
        }

    }
}
