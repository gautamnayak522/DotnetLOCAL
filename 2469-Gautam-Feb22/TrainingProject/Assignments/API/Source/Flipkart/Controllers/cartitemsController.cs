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
    public class cartitemsController : ControllerBase
    {
        public Icartitems cartitemservice { get; set; }
        public cartitemsController(Icartitems service)
        {
            cartitemservice = service;
        }

        [HttpPost]

        public IActionResult Post(Cartitem sc)
        {
            return Ok(cartitemservice.Post(sc));
        }
    }
}
