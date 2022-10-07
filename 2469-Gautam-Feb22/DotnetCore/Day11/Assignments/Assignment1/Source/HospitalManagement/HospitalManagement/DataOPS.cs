using HospitalManagement.Models;
using Microsoft.EntityFrameworkCore;
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

        public void PrintReport1()
        {
            Console.WriteLine("Enter DoctorID to find Assigned Patients :  ");
            int doctID = Convert.ToInt32(Console.ReadLine());

            var patientsunserdr = DBContext.Patients.Include("Assistant").Where(p => p.DoctorId == doctID).ToList();

            foreach (var item in patientsunserdr)
            {
                Console.WriteLine($"{item.PatientId} \t {item.PatientName} \t {item.Gender} \t {item.Assistant.AssistantName}");
            }
        }
        public void PrintReport2()
        {
            Console.WriteLine("Enter PatientID to find Assigned Patients :  ");
            int patID = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("Patient Name is : " + DBContext.Patients.Where(p=>p.PatientId==patID).Select(p=>p.PatientName).Single());
            
            Console.WriteLine("Drugs List");

            var drugsofpatient = DBContext.DrugTimings.Include("Drug").Where(d => d.PatientId == patID).ToList();

            foreach (var item in drugsofpatient)
            {
                Console.WriteLine($"{item.DrugId},{item.Drug.DrugName},{item.DrugTime}");
            }
        }

        public void PrintReport3()
        {
            Console.WriteLine("Enter PatientID to find Report of Patient :  ");
            int patID = Convert.ToInt32(Console.ReadLine());

            
            var patientSummary = DBContext.DrugTimings.Include(d=>d.Drug).Include(d=>d.Patient).ThenInclude(p => p.Doctor).ThenInclude(d => d.Dept)
                                                .Where(p => p.PatientId == patID).ToList();

            foreach (var item in patientSummary)
            {
                Console.WriteLine($"Patient ID : {item.PatientId} PatientName : {item.Patient.PatientName} Gender : {item.Patient.Gender} DoctorName : {item.Patient.Doctor.DoctorName} Department Name : {item.Patient.Doctor.Dept.DepatName} Drug : {item.Drug.DrugName} Time : {item.DrugTime} ");
            }
        }
    }
}
