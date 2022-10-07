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
    
    public class SubcategoryController : ControllerBase
    {
        public IProductSubcategory subcategoryservice { get; set; }
        public SubcategoryController(IProductSubcategory service)
        {
            subcategoryservice = service;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(subcategoryservice.Get());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok(subcategoryservice.Get(id));
        }

        [Authorize(Roles = "Admin")]
        [HttpPut]
        public IActionResult Put(int id, ProductSubcategory p)
        {
            ProductSubcategory p1 = subcategoryservice.Get(id);
            return Ok(subcategoryservice.Put(p1, p));
        }

        [Authorize(Roles = "Admin")]
        [HttpPost]
        public IActionResult Post(ProductSubcategory p)
        {
            return Ok(subcategoryservice.Post(p));
        }

        [Authorize(Roles = "Admin")]
        [HttpDelete]
        public IActionResult Delete(int id)
        {
            ProductSubcategory p1 = subcategoryservice.Get(id);
            return Ok(subcategoryservice.Delete(p1));
        }

        [Authorize(Roles = "Admin")]
        [HttpPatch]
        public IActionResult Patch(int id, [FromBody] JsonPatchDocument<ProductSubcategory> patchDocument)
        {
            var subcat = subcategoryservice.Get(id);
            patchDocument.ApplyTo(subcat);
            return Ok(subcategoryservice.Patch(subcat));
        }
    }
}

