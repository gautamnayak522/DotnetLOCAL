using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserManagement.Interfaces;
using UserManagement.Models;

namespace UserManagement.Controllers
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

        [Authorize(Roles = "Admin")]
        public IActionResult Get()
        {
            
                return Ok(userservice.Get());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok(userservice.Get(id));
        }

        [HttpPost]

        [RoleFilter(RequiredRole = "Admin")]
        public IActionResult Post(User u)
        {
            return Ok(userservice.Post(u));
        }

        [HttpDelete]
        //[RoleFilter(RequiredRole = "Admin")]
        public IActionResult Delete(int id)
        {
            User u1 = userservice.Get(id);
            return Ok(userservice.Delete(u1));
        }

        [HttpPut]
        public IActionResult Put(int id,User u)
        {
            User u1 = userservice.Get(id);
            return Ok(userservice.Put(u1,u));
        }


        [HttpPost]
        [RoleFilter(RequiredRole = "Admin")]
        [Route("addmultipleusers")]
        public IActionResult Post2(User u)
        {
            var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%$#@";
            var charsArr = new char[5];
            var random = new Random();

            for (int i = 0; i < 2000; i++)
            {
                for (int j = 0; j < charsArr.Length; j++)
                {
                    charsArr[j] = characters[random.Next(characters.Length)];
                }
                var result = new String(charsArr);

                User u1 = new User() { UserName = result.ToString(), UserRole = "Admin", EmailAddress=""+ result.ToString()+ "@a.com", Password = result.ToString() };
                userservice.Post(u1);
            }
            return Ok(u);
        }
    }
}
