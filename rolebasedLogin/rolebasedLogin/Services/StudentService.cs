using rolebasedLogin.Interfaces;
using rolebasedLogin.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace rolebasedLogin.Services
{
    public class StudentService:Repository<Student>,IStudent
    {
        //public SchoolManagementContext DBContext { get; set; }
        public StudentService(SchoolManagementContext schoolManagementContext):base(schoolManagementContext)
        {

        }
    }
}
