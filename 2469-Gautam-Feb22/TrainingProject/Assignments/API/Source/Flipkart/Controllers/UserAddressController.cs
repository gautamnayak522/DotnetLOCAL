using Flipkart.Interfaces;
using Flipkart.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Flipkart.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserAddressController : ControllerBase
    {
        public IUserAddress useraddressservice { get; set; }
        public UserAddressController(IUserAddress service)
        {
            useraddressservice = service;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(useraddressservice.Get());
        }


        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok(useraddressservice.Get(id));
        }

        [HttpPost]
        public IActionResult Post(UserAddress add1)
        {
            return Ok(useraddressservice.Post(add1));
        }

        [HttpPut]
        public IActionResult Put(int id, UserAddress add)
        {
            UserAddress add1 = useraddressservice.Get(id);
            return Ok(useraddressservice.Put(add1, add));
        }
    }
}
