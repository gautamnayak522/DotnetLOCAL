using flipkartAPI.Interfaces;
using flipkartAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace flipkartAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        public IUser userservice { get; set; }
        public UserController(IUser service)
        {
            userservice = service;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(userservice.Get());
        }

        [HttpGet ("{id}")]
        public IActionResult Get(int id)
        {
            return Ok(userservice.Get(id));
        }

        [HttpPost]
        public IActionResult Post(User u)
        {
            return Ok(userservice.Post(u));
        }

        [HttpPut]
        public IActionResult Put(int id, User u)
        {
            User u1 = userservice.Get(id);
            return Ok(userservice.Put(u1, u));
        }

        [HttpDelete]
        public IActionResult Delete(int id)
        {
            User u1 = userservice.Get(id);
            return Ok(userservice.Delete(u1));
        }
    }
}
