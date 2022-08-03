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
    public class PatientController : ControllerBase
    {
        public IPatient patientservice { get; set; }
        public PatientController(IPatient service)
        {
            patientservice = service;
        }
        
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(patientservice.Get());
        }
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok(patientservice.Get(id));
        }

        [HttpPost]
        public IActionResult Post(Patient d)
        {
            return Ok(patientservice.Post(d));
        }

        [HttpPut]
        public IActionResult Put(int id, Patient pt)
        {
            Patient d1 = patientservice.Get(id);
            return Ok(patientservice.Put(d1, pt));
        }

        [HttpDelete]
        public IActionResult Delete(int id)
        {
            Patient d1 = patientservice.Get(id);
            return Ok(patientservice.Delete(d1));
        }


    }
}
