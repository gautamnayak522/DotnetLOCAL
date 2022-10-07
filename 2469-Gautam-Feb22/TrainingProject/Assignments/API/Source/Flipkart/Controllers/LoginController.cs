using Flipkart.Interfaces;
using Flipkart.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Flipkart.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private IConfiguration _config;
        public IUser userservice { get; set; }
        public LoginController(IConfiguration config, IUser service)
        {
            _config = config;
            userservice = service;
        }

        [AllowAnonymous]
        [HttpPost]
        public IActionResult Login([FromBody] LoginDTO login)
        {
            IActionResult response = Unauthorized();
            var user = AuthenticateUser(login);

            if (user != null)
            {
                if (BCrypt.Net.BCrypt.Verify(login.Password, user.Password))
                {
                    var tokenString = GenerateJSONWebToken(user);
                    response = Ok(new { userId = user.UserId, token = tokenString });
                }
                else
                {
                    response = Ok(new { message = "Invalid Creditiantials" });
                }

            }
            else
            {
                response = Ok(new { message = "Not Registered" });
            }

            return response;
        }

        private string GenerateJSONWebToken(User userInfo)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claimss = new[] {
                new Claim(JwtRegisteredClaimNames.Sub, userInfo.MobileNo),
                new Claim(ClaimTypes.Role, (bool)userInfo.IsAdmin?"Admin":"Basic"),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };

            var token = new JwtSecurityToken(_config["Jwt:Issuer"],
              _config["Jwt:Issuer"], claims: claimss,
              expires: DateTime.Now.AddMinutes(120),
              signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        private User AuthenticateUser(LoginDTO login)
        {
            User user = null;

            byte[] encData_byte = new byte[login.Password.Length];
            encData_byte = System.Text.Encoding.UTF8.GetBytes(login.Password);
            string loginpassword = Convert.ToBase64String(encData_byte);



            User availableuser = userservice.Get().Where(x => (x.EmailAddress == login.mobile_or_email || x.MobileNo == login.mobile_or_email)).FirstOrDefault();

            if (availableuser == null)
            {
                return user;
            }

            return availableuser;
        }
    }
}
