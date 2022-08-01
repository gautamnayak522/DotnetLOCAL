using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToyCompanyAPI.Models;

namespace ToyCompanyAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ToyController : ControllerBase
    {
        public IToyService toyService { get; set; }
        public ToyController(IToyService service)
        {
            toyService = service;
        }
        [HttpGet]
         public IActionResult Get()
        {
            return Ok(toyService.Get());
        }

        [HttpPost]
        public IActionResult Post([FromBody] Toy toy)
        {
            return Ok(toyService.Post(toy));
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok(toyService.Get(id));
        }

        [HttpDelete]

        public IActionResult DeleteToy(int id)
        {
            return Ok(toyService.Delete(id));
        }
    }
}
