using ActionFilterPractice.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ActionFilterPractice.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepartmentController : ControllerBase
    {
        public IDepartmentService departmentService { get; set; }
        public DepartmentController(IDepartmentService service)
        {
            departmentService = service;
        }
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(departmentService.Get());
        }
        [HttpPost]
        public IActionResult Post([FromBody] Department d1)
        {
            return Ok(departmentService.Post(d1));
        }
    }
}
