using ActionFilterPractice.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ActionFilterPractice
{
    public interface IDepartmentService : IRepository<Department>
    {

    }
    public class DepartmentService:Repository<Department>,IDepartmentService
    {
        public DepartmentService(HospitalManagementContext hospitalManagementContext) : base(hospitalManagementContext)
        {

        }
    }
}
