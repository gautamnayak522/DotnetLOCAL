using Flipkart.Interfaces;
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
    public class ProductImageController : ControllerBase
    {
        public IProductImage productimageservice { get; set; }
        public ProductImageController(IProductImage service)
        {
            productimageservice = service;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(productimageservice.Get());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok(productimageservice.Get(id));
        }

        [HttpGet("getmainimages")]
        //[Route ("getmain")]
        public IActionResult GetMainImages()
        {
            return Ok(productimageservice.Get().Where(x => x.IsMain == true));
        }

        [HttpGet("{prodID}/GetProductMainImage")]
        public IActionResult GetProductMainImage(int prodID)
        {
            return Ok(productimageservice.Get().Where(x => x.IsMain == true && x.ProductId== prodID).FirstOrDefault());
        }
    }
}
