using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToyCompanyAPI.Models;

namespace ToyCompanyAPI
{
    public interface ICustomerService : IRepository<Customer>
    {
        public List<Toy> PrintAllProducts();
    }
   
    public class CustomerService:Repository<Customer>,ICustomerService
    {
        public TOY_MAF_COMPANYContext DBContext { get; set; }
        public CustomerService(TOY_MAF_COMPANYContext tOY_MAF_COMPANYContext):base(tOY_MAF_COMPANYContext)
        {
            DBContext = tOY_MAF_COMPANYContext;
        }

        public List<Toy> PrintAllProducts()
        {
            return DBContext.Toys.ToList();
        }
    }
}
