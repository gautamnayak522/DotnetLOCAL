using Flipkart.Interfaces;
using Flipkart.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Flipkart.Services
{
    public class UserAddressService : Repository<UserAddress>, IUserAddress
    {
        public flipkart2469gautamContext DBContext { get; set; }
        public UserAddressService(flipkart2469gautamContext flipkartDBContext) : base(flipkartDBContext)
        {
            DBContext = flipkartDBContext;
        }
    }
}
