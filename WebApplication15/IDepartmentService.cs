using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using WebApplication15.Models;

namespace WebApplication15
{
   

    public interface IDepartmentService : IRepository<Department>
    {
     
    }
    public class DepartmentService : Repository<Department>, IDepartmentService
    {
        public DepartmentService(DemoDbContext demoDbContext) : base(demoDbContext)
        {
        }    

    }
}
