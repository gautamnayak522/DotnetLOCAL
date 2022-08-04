using HospitalManagementAPI.Interfaces;
using HospitalManagementAPI.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HospitalManagementAPI.Services
{
    public class DoctorService:Repository<Doctor>,IDoctor
    {
        public HospitalManagementContext DBContext { get; set; }
        public DoctorService(HospitalManagementContext hospitalManagementContext):base(hospitalManagementContext)
        {
            DBContext = hospitalManagementContext;
        }

        public List<Patient> GetMyPatient(int id)
        {
            return DBContext.Patients.Where(p => p.DoctorId == id).ToList();
        }
    }
}
