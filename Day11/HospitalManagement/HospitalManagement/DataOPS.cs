using HospitalManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HospitalManagement
{
    class DataOPS
    {
        public HospitalManagementContext DBContext { get; set; }
        public DataOPS()
        {
            DBContext = new HospitalManagementContext();
        }

        public void printDocorDetails()
        {
            var doctorDetails = DBContext.Doctors.ToList();
            Console.WriteLine("DoctorId\tDoctorName\tDeptId");
            foreach (var item in doctorDetails)
            {
                Console.WriteLine(item);
            }
        }
        public void AddDoctor()
        {
            Doctor d1 = new Doctor();
            Console.WriteLine("Enter Doctor Name : ");
            d1.DoctorName = Console.ReadLine();
            Console.WriteLine("Enter Department ID : ");
            d1.DeptId = Convert.ToInt32(Console.ReadLine());

            DBContext.Add(d1);
            DBContext.SaveChanges();
            Console.WriteLine("Doctor Added");
        }

        public void UpdateDoctor()
        {
            Console.WriteLine("Enter Doctor ID to Update");
            int doctID = Convert.ToInt32(Console.ReadLine());

            var doctor = DBContext.Doctors.FirstOrDefault(d => d.DoctorId == doctID );

            Console.WriteLine($"Enter Doctor Name ({doctor.DoctorName}) : ");
            doctor.DoctorName = Console.ReadLine();
            Console.WriteLine($"Enter Department ID ({doctor.DeptId}) : ");
            doctor.DeptId = Convert.ToInt32(Console.ReadLine());

            DBContext.Update(doctor);
            DBContext.SaveChanges();
            Console.WriteLine("Doctor Details Are Updated");
        }

        public void RemoveDoctor()
        {
            Console.WriteLine("Enter Doctor ID to Remove");
            int doctID = Convert.ToInt32(Console.ReadLine());
            
            var doctor = DBContext.Doctors.FirstOrDefault(d => d.DoctorId == doctID);

            DBContext.Remove(doctor);
            DBContext.SaveChanges();
            Console.WriteLine("Doctor Details Removed");

        }


    }
}
