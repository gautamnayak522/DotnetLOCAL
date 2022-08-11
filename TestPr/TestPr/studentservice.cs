using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TestPr.Models;

namespace TestPr
{
    public interface IStudent
    {
        List<Student> Get();
        Student Get(int id);
        int Post(Student s);

        Student Put(Student old, Student newstudent);

        Student Delete(Student s);
    }
    public class studentservice:IStudent
    {
        public SchoolManagementContext DBContext { get; set; }
        public studentservice(SchoolManagementContext schoolManagementContext)
        {
            DBContext = schoolManagementContext;
        }

        public List<Student> Get()
        {
            return DBContext.Students.ToList();
        }

        public Student Get(int id)
        {
            return DBContext.Students.Find(id);
        }

        public int Post(Student s)
        {
            DBContext.Add(s);
            DBContext.SaveChanges();
            return s.StdId;
        }

        public Student Put(Student old, Student newstudent)
        {
            DBContext.Entry(old).CurrentValues.SetValues(newstudent);
            DBContext.SaveChanges();
            return newstudent;
        }

        public Student Delete(Student s)
        {
            DBContext.Remove(s);
            DBContext.SaveChanges();
            return s;
        }

         
    }
}
