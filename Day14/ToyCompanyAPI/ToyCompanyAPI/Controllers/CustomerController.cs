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
    public class CustomerController : ControllerBase
    {
        public ICustomerService customerService { get; set; }
        public CustomerController(ICustomerService service)
        {
            customerService = service;
        }
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(customerService.Get());
        }

        [HttpPost]
        public IActionResult Post([FromBody] Customer cust)
        {
            return Ok(customerService.Post(cust));
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok(customerService.Get(id));
        }

        [HttpGet("Toys")]
        public IActionResult PrintAllProducts()
        {
            return Ok(customerService.PrintAllProducts());
        }

        [HttpDelete]

        public IActionResult DeleteCustomer(int id)
        {
            return Ok(customerService.Delete(id));
        }


    }
}
