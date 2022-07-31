using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FileOps.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        public IUserSer userService{ get; set; }
        public UserController(IUserSer service)
        {
            userService = service;
        }
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(userService.Get());
        }
    }
}
