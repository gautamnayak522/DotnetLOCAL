using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserManagement.Interfaces;
using UserManagement.Models;

namespace UserManagement.Services
{
    public class UserService:Repository<User>,IUser
    {
        public UserService(USERDBContext uSERDBContext):base(uSERDBContext)
        {

        }
    }
}
