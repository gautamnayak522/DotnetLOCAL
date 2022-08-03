using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MiddlewarePractice.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MiddlewarePractice.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

  
    public class UserController : ControllerBase
    {
        public SHOPING_SYSTEMContext DBContext { get; set; }
        public UserController(SHOPING_SYSTEMContext tempContext)
        {
            DBContext = tempContext;
        }

        [HttpGet]

        public List<User> Get()
        {
            return DBContext.Users.ToList();
        }

        [HttpPost]

        public User Post(User u)
        {
            DBContext.Add(u);
            DBContext.SaveChanges();
            return u;
        }
    }
}
