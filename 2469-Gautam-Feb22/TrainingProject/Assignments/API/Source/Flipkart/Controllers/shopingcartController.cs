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
    public class shopingcartController : ControllerBase
    {
        public Ishopingcart shopingcartservice { get; set; }
        public shopingcartController(Ishopingcart service)
        {
            shopingcartservice = service;
        }

        [HttpPost]

        public IActionResult Post(ShopingCart sc)
        {
            return Ok(shopingcartservice.Post(sc));
        }
    }
}
