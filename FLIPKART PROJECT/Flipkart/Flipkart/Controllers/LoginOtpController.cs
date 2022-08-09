using Flipkart.Interfaces;
using Flipkart.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Flipkart.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginOtpController : ControllerBase
    {
        private IConfiguration _config;
        public IUser userservice { get; set; }
        public LoginOtpController(IConfiguration config, IUser service)
        {
            _config = config;
            userservice = service;
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
                return Ok(userservice.Put(updateuser, user).Otp);

            }
            else
            {
                response = Problem(title: "INVALID DETAILS", statusCode: 401);
            }

            return response;
        }
        private User AuthenticateUser(LoginwithOtpDTO login)
        {
            User user = null;

            User availableuser = userservice.Get().Where(x => x.EmailAddress == login.mobile_or_email || x.MobileNo == login.mobile_or_email).FirstOrDefault();

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
                    return Ok("login");
                }
                else
                {
                    return Ok("Invalid OTP");
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

            User availableuser = userservice.Get().Where(x => x.EmailAddress == login.mobile_or_email || x.MobileNo == login.mobile_or_email).FirstOrDefault();

            if (availableuser == null)
            {
                return user;
            }

            return availableuser;
        }

    }
}
