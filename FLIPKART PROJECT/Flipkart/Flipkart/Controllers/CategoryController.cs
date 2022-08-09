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
    public class CategoryController : ControllerBase
    {
        public IProductCategory categoryservice { get; set; }
        public CategoryController(IProductCategory service)
        {
            categoryservice = service;
        }
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(categoryservice.Get());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok(categoryservice.Get(id));
        }

        [HttpPut]
        public IActionResult Put(int id, ProductCategory p)
        {
            ProductCategory p1 = categoryservice.Get(id);
            return Ok(categoryservice.Put(p1, p));
        }

        [HttpPost]
        public IActionResult Post(ProductCategory p)
        {
            return Ok(categoryservice.Post(p));
        }

        [HttpDelete]
        public IActionResult Delete(int id)
        {
            ProductCategory p1 = categoryservice.Get(id);
            return Ok(categoryservice.Delete(p1));
        }

        [HttpPatch]
        public IActionResult Patch(int id, [FromBody] JsonPatchDocument<ProductCategory> patchDocument)
        {
            var cat = categoryservice.Get(id);
            patchDocument.ApplyTo(cat);
            return Ok(categoryservice.Patch(cat));
        }
    }
}
