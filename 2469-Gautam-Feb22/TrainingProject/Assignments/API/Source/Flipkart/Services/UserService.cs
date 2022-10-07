using Flipkart.Interfaces;
using Flipkart.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;

namespace Flipkart.Services
{
    public class UserService : Repository<User>, IUser
    {
        public flipkart2469gautamContext DBContext { get; set; }
        public UserService(flipkart2469gautamContext flipkartDBContext) : base(flipkartDBContext)
        {
            DBContext = flipkartDBContext;
        }

        public dynamic getUserwithAddress(int userId)
        {
            //return DBContext.Users.Include(a=>a.UserAddresses).FirstOrDefault(x=>x.UserId==userId);

            var returndata = DBContext.Users.Include(a => a.UserAddresses).Select(a =>
                       new
                       {
                           UserId = a.UserId,
                           MobileNo = a.MobileNo,
                           EmailAddress = a.EmailAddress,
                           FirstName = a.FirstName,
                           LastName = a.LastName,
                           UserAddresses = a.UserAddresses.Select(p => new { 
                               UserAddId = p.UserAddId,
                               Addressline1=p.Addressline1,
                               Addressline2=p.Addressline2,
                               LandMark=p.LandMark,
                               City=p.City,
                               Pin=p.Pin,
                               StateId=p.StateId
                           }).ToList()
                       }).Where(x=>x.UserId==userId).FirstOrDefault();

            return returndata;
        }
    }
}
