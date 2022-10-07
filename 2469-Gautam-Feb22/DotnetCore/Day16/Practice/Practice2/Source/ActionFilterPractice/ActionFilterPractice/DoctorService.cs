using ActionFilterPractice.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ActionFilterPractice
{
    public interface IDoctorService : IRepository<Doctor>
    {

    }
    public class DoctorService:Repository<Doctor>,IDoctorService
    {
        public DoctorService(HospitalManagementContext hospitalManagementContext):base(hospitalManagementContext)
        {

        }
    }
}
