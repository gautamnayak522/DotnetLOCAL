using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToyCompanyAPI.Models;

namespace ToyCompanyAPI
{
    public interface IToyService : IRepository<Toy>
    {

    }
    public class ToyService:Repository<Toy>,IToyService
    {
        public ToyService(TOY_MAF_COMPANYContext tOY_MAF_COMPANYContext):base(tOY_MAF_COMPANYContext)
        {

        }
    }
}
