using flipkartAPI.Interfaces;
using flipkartAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace flipkartAPI.Services
{
    public class UserService:Repository<User>,IUser
    {
        public UserService(FlipkartDBContext flipkartDBContext):base(flipkartDBContext)
        {

        }
    }
}
