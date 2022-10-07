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
    [Authorize]
    public class UserController : ControllerBase
    {
        public IUser userservice { get; set; }
        public UserController(IUser service)
        {
            userservice = service;
        }
        [Authorize(Roles = "Admin")]
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(userservice.Get());
        }

        [Authorize]
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok(userservice.Get(id));
        }

        [HttpGet("getUserwithAddress/{id}")]
        public IActionResult getUserwithAddress(int id)
        {
            return Ok(userservice.getUserwithAddress(id));
        }

        [Authorize]
        [HttpPut]
        public IActionResult Put(int id, User u)
        {

            User u1 = userservice.Get(id);

            if (u1.Password != u.Password)
            {

                u.Password = BCrypt.Net.BCrypt.HashPassword(u.Password);

                //byte[] encData_byte = new byte[u.Password.Length];
                //encData_byte = System.Text.Encoding.UTF8.GetBytes(u.Password);
                //string encodedData = Convert.ToBase64String(encData_byte);

                //u.Password = encodedData;
            }
            
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
        [Authorize(Roles = "Admin")]
        [HttpDelete]
        public IActionResult Delete(int id)
        {
            User u1 = userservice.Get(id);
            return Ok(userservice.Delete(u1));
        }
        [Authorize(Roles = "Admin")]
        [HttpPatch]
        public IActionResult Patch(int id, [FromBody] JsonPatchDocument<User> patchDocument)
        {
            var user = userservice.Get(id);
            patchDocument.ApplyTo(user);
            return Ok(userservice.Patch(user));
        }

        
    }
}
