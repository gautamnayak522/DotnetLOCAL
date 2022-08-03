using jwtPractice.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace jwtPractice.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class DoctorController : ControllerBase
    {
        public IDoctorService doctorService { get; set; }
        public DoctorController(IDoctorService service)
        {
            doctorService = service;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(doctorService.Get());
        }
        [HttpPost]
        public IActionResult Post([FromBody] Doctor d)
        {
            return Ok(doctorService.Post(d));
        }
    }
}
