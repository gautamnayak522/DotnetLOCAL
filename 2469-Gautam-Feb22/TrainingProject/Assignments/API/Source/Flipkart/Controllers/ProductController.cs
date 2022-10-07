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
    public class ProductController : ControllerBase
    {
        public IProduct productservice { get; set; }
        public ProductController(IProduct service)
        {
            productservice = service;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(productservice.Get());
        }

        [HttpGet ("getproductwithimages")]
        public IActionResult GetWithImages()
        {
            return Ok(productservice.GetWithImages());
        }

        [HttpGet("GetProductMaster")]
        public IActionResult GetProductMaster()
        {
            return Ok(productservice.GetProductMaster());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok(productservice.Get(id));
        }

        [Authorize(Roles = "Admin")]
        [HttpPost]
        public IActionResult Post(Product p)
        {
            return Ok(productservice.Post(p));
        }

        [Authorize(Roles = "Admin")]
        [HttpPut]
        public IActionResult Put(int id, Product p)
        {

            Product p1 = productservice.Get(id);

            return Ok(productservice.Put(p1, p));
        }

       

        [HttpDelete]
        [Authorize(Roles = "Admin")]
        public IActionResult Delete(int id)
        {
            Product p = productservice.Get(id);
            return Ok(productservice.Delete(p));
        }
    }
}
