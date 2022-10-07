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
using Twilio.Clients;
using Twilio.Rest.Api.V2010.Account;

namespace Flipkart.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginOtpController : ControllerBase
    {
        private IConfiguration _config;
        private readonly ITwilioRestClient _client;
        public IUser userservice { get; set; }
        public LoginOtpController(IConfiguration config, IUser service, ITwilioRestClient client)
        {
            _config = config;
            userservice = service;
            _client = client;
        }

        [AllowAnonymous]
        [HttpPost]
        [Route ("SendOTP")]
        public IActionResult LoginwithOTP([FromBody] LoginwithOtpDTO login)
        {
            IActionResult response = Unauthorized();
            
            var user = AuthenticateUser(login);

            if (user != null)
            {

                Random rnd = new Random();
                var randomNumber = (rnd.Next(100000, 999999)).ToString();

                User updateuser = userservice.Get(user.UserId);

                updateuser.Otp = randomNumber;

                var otpvalue = userservice.Put(updateuser, user).Otp;

                     var message = MessageResource.Create(
                                             //Trial accounts cannot send messages to unverified numbers
                    to: "+919499772737",    // Trial account only provide sms service to registered number
                    from: "+19065694594",  //number provided by Twilio
                    body: $"OTP for {updateuser.MobileNo} is {otpvalue}",
                    client: _client);

               
                return Ok(new { message = $"OTP SENT TO {updateuser.MobileNo}" });

            }
            else
            {
                return Ok(new { message = "NOT REGISTERED" });
            }

            return response;
        }
        private User AuthenticateUser(LoginwithOtpDTO login)
        {
            User user = null;

            User availableuser = userservice.Get().Where(x=>x.MobileNo == login.mobile_no).FirstOrDefault();

            if (availableuser == null)
            {
                return user;
            }

            return availableuser;
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("VerifyOTP")]
        public IActionResult verifyOTP([FromBody] VerifyOtpDTO login)
        {
            IActionResult response = Unauthorized();

            var user = AuthenticateUser(login);

            if (user != null)
            {

                if(user.Otp==login.otp)
                {
                    var tokenString = GenerateJSONWebToken(user);
                    response = Ok(new { userId = user.UserId, token = tokenString });
                }
                else
                {
                    response = Ok(new { message = "Invalid OTP" });
                }

            }
            else
            {
                response = Problem(title: "INVALID DETAILS", statusCode: 401);
            }

            return response;
        }

        private User AuthenticateUser(VerifyOtpDTO login)
        {
            User user = null;

            User availableuser = userservice.Get().Where(x => x.MobileNo == login.mobileno).FirstOrDefault();

            if (availableuser == null)
            {
                return user;
            }

            return availableuser;
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

    }
}
