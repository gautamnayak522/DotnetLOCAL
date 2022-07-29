using APIPractice.Models;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIPractice
{
    public class DataHelper
    {
        SHOPING_SYSTEMContext DBContext;
        public DataHelper()
        {
            DBContext = new SHOPING_SYSTEMContext();
        }

        public async Task<List<User>> Getallusers()
        {
            var users = await DBContext.Users.ToListAsync();
            return users;
        }
        public async Task<User> GetuserbyID(int id)
        {
            //return await DBContext.Users.Where(u=>u.UserId==id).FirstOrDefaultAsync();
            //return await DBContext.Users.FirstOrDefaultAsync(u => u.UserId == id);
            return await DBContext.Users.FindAsync(id);
        }
        public async Task<int> PostNewUser(User user)
        {
            DBContext.Add(user);
            await DBContext.SaveChangesAsync();
            return user.UserId;
        }
        public async Task<User> UpdateUser(User user)
        {
            var existinguser = DBContext.Users.Where(u => u.UserId == user.UserId).FirstOrDefault<User>();
            existinguser.UserName = user.UserName;
            existinguser.IsPrime = user.IsPrime;
            await DBContext.SaveChangesAsync();
            return user;
        }
        
    }
}
