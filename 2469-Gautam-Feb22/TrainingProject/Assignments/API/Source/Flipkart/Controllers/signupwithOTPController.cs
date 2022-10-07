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
using Twilio.Clients;
using Twilio.Rest.Api.V2010.Account;

namespace Flipkart.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class signupwithOTPController : ControllerBase
    {
        private IConfiguration _config;
        private readonly ITwilioRestClient _client;
        public IUser userservice { get; set; }
        public signupwithOTPController(IConfiguration config, IUser service, ITwilioRestClient client)
        {
            _config = config;
            userservice = service;
            _client = client;
        }

        [AllowAnonymous]
        [HttpPost]
        public IActionResult SignupwithOTP([FromBody] LoginwithOtpDTO login)
        {
            IActionResult response = Unauthorized();

            var user = AuthenticateUser(login);

            if (user == null)
            {
                User newuser = new User();
                Random rnd = new Random();
                var randomNumber = (rnd.Next(100000, 999999)).ToString();

                newuser.MobileNo = login.mobile_no;
                newuser.Otp = randomNumber;

                var message = MessageResource.Create(
               //Trial accounts cannot send messages to unverified numbers
               to: "+919499772737",    // Trial account only provide sms service to registered number
               from: "+19065694594",  //number provided by Twilio
               body: $"OTP for {newuser.MobileNo} is {newuser.Otp}",
               client: _client);

                return Ok(new { message = $"OTP SENT TO {userservice.Post(newuser).MobileNo}" });

            }
            else
            {
                response = Ok(new { message = "Already Registered" });
            }

            return response;
        }
        private User AuthenticateUser(LoginwithOtpDTO login)
        {
            User user = null;

            User availableuser = userservice.Get().Where(x => x.MobileNo == login.mobile_no).FirstOrDefault();

            if (availableuser == null)
            {
                return user;
            }

            return availableuser;
        }
    }
}
