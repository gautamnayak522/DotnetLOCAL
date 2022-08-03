using ActionFilterPractice.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ActionFilterPractice
{
    public interface IRepository<TEntity> where TEntity :class
    {
        List<TEntity> Get();
        TEntity Post(TEntity te);
    }
   
    public class Repository<T>:IRepository<T> where T : class
    {
        public HospitalManagementContext DBContext { get; set; }
        public Repository(HospitalManagementContext hospitalManagementContext)
        {
            DBContext = hospitalManagementContext;
        }

        public List<T> Get()
        {
            return DBContext.Set<T>().ToList();
        }
        public T Post(T te)
        {
            DBContext.Add(te);
            DBContext.SaveChanges();
            return te;
        }
    }
}
