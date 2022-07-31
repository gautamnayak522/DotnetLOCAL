using FileOps.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FileOps
{
 
    public class UserService: Repository<User>, IUserSer
    {
        public UserService(SHOPING_SYSTEMContext DBContext ):base(DBContext)
        {
            
        }


    }
}
