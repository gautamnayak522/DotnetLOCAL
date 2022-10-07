using APIPractice.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIPractice.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private DataHelper DataHelper { get; set; }
        public UserController()
        {
            DataHelper = new DataHelper();
        }


        [HttpGet]
        public async Task<ActionResult> Get()
        {
            return Ok(await DataHelper.Getallusers());
        }



        [HttpGet("{id}")]
        public async Task<ActionResult> Get(int id)
        {
            return Ok(await DataHelper.GetuserbyID(id));
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] User user)
        {
            var arr = new List<string>();

            if(string.IsNullOrEmpty(user.UserName) || string.IsNullOrEmpty(user.IsPrime.ToString()))
            {
                arr.Add("All fields are requied ");
            }
            if (arr.Count > 0)
            {
                return BadRequest(arr);
            }
            else
            {
                return Ok(await DataHelper.PostNewUser(user));
            }
        }

        [HttpPut]
        public async Task<ActionResult> Put(User user)
        {
            return Ok(await DataHelper.UpdateUser(user));
        }

        [HttpPatch("{id}")]
        public async Task<IActionResult> Patch(int id, [FromBody] JsonPatchDocument<User> patchuser)
        {
            var user = await DataHelper.GetuserbyID(id);
            patchuser.ApplyTo(user);
            return Ok(await DataHelper.UpdateUser(user));
        }

    }
}
