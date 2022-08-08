using rolebasedLogin.Interfaces;
using rolebasedLogin.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace rolebasedLogin.Services
{
    public class UserService : Repository<User>, IUser
    {
        //public SchoolManagementContext DBContext { get; set; }
        public UserService(SchoolManagementContext schoolManagementContext) : base(schoolManagementContext)
        {

        }
    }
}
