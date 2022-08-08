using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

#nullable disable

namespace rolebasedLogin.Models
{
    public partial class User
    {
        [JsonIgnore]
        public int UserId { get; set; }
        public string UserName { get; set; }
        [JsonIgnore]
        public string Password { get; set; }
        public string EmailAddress { get; set; }
        [JsonIgnore]
        public string UserRole { get; set; }
    }
}
