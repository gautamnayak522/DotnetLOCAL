using Flipkart.Interfaces;
using Flipkart.Models;
using Microsoft.AspNetCore.Authorization;
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
    public class productinventoryController : ControllerBase
    {
        public IProductInventory productinventoryservice { get; set; }
        public productinventoryController(IProductInventory service)
        {
            productinventoryservice = service;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(productinventoryservice.Get());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok(productinventoryservice.Get(id));
        }

        [HttpGet ("GetInventorybyProductID")]
        public IActionResult GetInventorybyProductID(int productID)
        {
            return Ok(productinventoryservice.GetInventorybyProductID(productID));
        }

        [Authorize(Roles = "Admin")]
        [HttpPut]
        public IActionResult Put(int id, ProductsInventory p)
        {

            ProductsInventory p1 = productinventoryservice.Get(id);
            return Ok(productinventoryservice.Put(p1, p));
        }

    }
}
