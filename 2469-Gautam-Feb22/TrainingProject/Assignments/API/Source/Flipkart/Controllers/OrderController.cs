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
    public class OrderController : ControllerBase
    {
        public IOrder orderservice { get; set; }
        public OrderController(IOrder service)
        {
            orderservice = service;
        }

        [Authorize(Roles = "Admin")]
        [HttpGet]
        public IActionResult GetOrderMaster()
        {
            return Ok(orderservice.GetOrderMaster());
        }



        [HttpPost]
        public IActionResult Post(Order o)
        {
            Random rd = new Random();//Used to generate random numbers

            string DateStr = DateTime.Now.ToString("yyyyMMddHHmmssMM");//Date

            string str = DateStr + rd.Next(100).ToString().PadLeft(3, '0');//Random number with date
            o.OrderNo = str;

            return Ok(orderservice.Post(o));
        }

        [HttpPost ("OrderwithmasterDetails")]
        public IActionResult Postwithmasterreturn(Order o)
        {
            Random rd = new Random();//Used to generate random numbers

            string DateStr = DateTime.Now.ToString("yyyyMMddHHmmssMM");//Date

            string str = DateStr + rd.Next(100).ToString().PadLeft(3, '0');//Random number with date
            o.OrderNo = str;

            return Ok(orderservice.OrderwithmasterDetails(o));
        }

        [HttpGet ("getstatuses")]

        public IActionResult GetOrderStatuses()
        {
            return Ok(orderservice.GetOrderStatuses());
        }

        [HttpGet ("GetOrdersofUser")]
        public IActionResult GetOrdersofUser(int userId)
        {
            return Ok(orderservice.GetOrdersofUser(userId));
        }

        [HttpGet("GetOrderbyOrderNo")]
        public IActionResult GetOrderbyOrderNo(string orderNo)
        {
            return Ok(orderservice.GetOrderbyOrderNo(orderNo));
        }
            

        [HttpPut]
        public IActionResult UpdateStatus(dynamic order)
        {
            int orderID = order.orderID;
            int statusId = order.statusId;
            //var orderid = Newtonsoft.Json.JsonConvert.DeserializeObject<object>(test);
            Order oldorder = orderservice.Get(orderID);
            Order updatedorder = orderservice.Get(orderID);
            updatedorder.OrderstatusId = statusId;
            return Ok(orderservice.Put(oldorder, updatedorder));
        }
    }
}
