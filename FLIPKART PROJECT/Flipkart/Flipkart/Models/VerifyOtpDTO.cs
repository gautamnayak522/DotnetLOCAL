using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Flipkart.Models
{
    public class VerifyOtpDTO
    {
        public string mobile_or_email { get; set; }
        public string otp { get; set; }
    }
}
