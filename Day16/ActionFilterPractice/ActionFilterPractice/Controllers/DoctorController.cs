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
    public class DoctorController : ControllerBase
    {
        public IDoctorService doctorservice { get; set; }
        public DoctorController(IDoctorService service)
        {
            doctorservice = service;
        }

        [HttpGet]
        [AccessActionFilter(RequiredRole ="Admin")]
        public IActionResult Get()
        {
            return Ok(doctorservice.Get());
        }

        [HttpPost]
        [AccessActionFilter(RequiredRole = "Admin")]
        public IActionResult Post([FromBody] Doctor d)
        {
            return Ok(doctorservice.Post(d));
        }
    }
}
