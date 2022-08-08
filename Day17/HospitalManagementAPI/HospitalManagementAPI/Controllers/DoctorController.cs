using HospitalManagementAPI.Interfaces;
using HospitalManagementAPI.Models;
using Microsoft.AspNetCore.Authorization;
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
    [Authorize]
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

        [Authorize(Roles = "Admin")]
        [HttpPost]
        public IActionResult Post(Doctor d)
        {
            return Ok(doctorservice.Post(d));
        }

        [Authorize(Roles = "Admin")]

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

        [HttpGet]
        [Route  ("{id}/my_patients")]

        public IActionResult GetAllPatients(int id)
        {
            //var patientsunserdr = DBContext.Patients.Include("Assistant").Where(p => p.DoctorId == id).ToList();
            return Ok(doctorservice.GetMyPatient(id)); 
        }

    }
}
