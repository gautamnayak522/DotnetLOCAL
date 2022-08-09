using Flipkart.Interfaces;
using Flipkart.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Flipkart.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles = "Admin")]
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

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok(userservice.Get(id));
        }

        [HttpPut]
        public IActionResult Put(int id, User u)
        {
            User u1 = userservice.Get(id);
            return Ok(userservice.Put(u1, u));
        }

        [AllowAnonymous]
        [HttpPost]
        public IActionResult Post(User u)
        {
            byte[] encData_byte = new byte[u.Password.Length];
            encData_byte = System.Text.Encoding.UTF8.GetBytes(u.Password);
            string encodedData = Convert.ToBase64String(encData_byte);
            u.Password = encodedData;

            return Ok(userservice.Post(u));
        }

        [HttpDelete]
        public IActionResult Delete(int id)
        {
            User u1 = userservice.Get(id);
            return Ok(userservice.Delete(u1));
        }

        [HttpPatch]
        public IActionResult Patch(int id, [FromBody] JsonPatchDocument<User> patchDocument)
        {
            var user = userservice.Get(id);
            patchDocument.ApplyTo(user);
            return Ok(userservice.Patch(user));
        }
    }
}
