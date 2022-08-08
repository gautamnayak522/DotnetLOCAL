using HospitalManagementAPI.Interfaces;
using HospitalManagementAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HospitalManagementAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DoctorController : ControllerBase
    {
        public IDoctor doctorservice { get; set; }
        public DoctorController(IDoctor service)
        {
            doctorservice = service;
        }
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(doctorservice.Get());
        }
        [HttpGet ("{id}")]
        public IActionResult Get(int id)
        {
            return Ok(doctorservice.Get(id));
        }

        [HttpPost]
        public IActionResult Post(Doctor d)
        {
            return Ok(doctorservice.Post(d));
        }

        [HttpPut]
        public IActionResult Put(int id,Doctor dr)
        {
            Doctor d1 = doctorservice.Get(id);
            return Ok(doctorservice.Put(d1,dr));
        }

        [HttpDelete]
        public IActionResult Delete(int id)
        {
            Doctor d1 = doctorservice.Get(id);
            return Ok(doctorservice.Delete(d1));
        }
    }
}
