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
    public class BrandController : ControllerBase
    {
        public IProductBrand brandservice { get; set; }
        public BrandController(IProductBrand service)
        {
            brandservice = service;
        }
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(brandservice.Get());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok(brandservice.Get(id));
        }

        [HttpPut]
        public IActionResult Put(int id, ProductBrand pb)
        {
            ProductBrand pb1 = brandservice.Get(id);
            return Ok(brandservice.Put(pb1, pb));
        }

        [HttpPost]
        public IActionResult Post(ProductBrand pb)
        {
            return Ok(brandservice.Post(pb));
        }

        [HttpDelete]
        public IActionResult Delete(int id)
        {
            ProductBrand pb1 = brandservice.Get(id);
            return Ok(brandservice.Delete(pb1));
        }

        [HttpPatch]
        public IActionResult Patch(int id, [FromBody] JsonPatchDocument<ProductBrand> patchDocument)
        {
            var brand = brandservice.Get(id);
            patchDocument.ApplyTo(brand);
            return Ok(brandservice.Patch(brand));
        }
    }
}
