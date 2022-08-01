using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToyCompanyAPI.Models;

namespace ToyCompanyAPI
{
    public interface IRepository <TEntity> where TEntity : class
    {
        List<TEntity> Get();
        TEntity Get(int id);
        TEntity Post(TEntity te);
        TEntity Delete(int id);
    }
    public class Repository <T> : IRepository<T> where T : class
    {
        public TOY_MAF_COMPANYContext DBContext;
        public Repository(TOY_MAF_COMPANYContext tOY_MAF_COMPANYContext)
        {
            DBContext = tOY_MAF_COMPANYContext;
        }

        public List<T> Get()
        {
            return DBContext.Set<T>().ToList();
        }
        public T Get(int id)
        {
            return DBContext.Set<T>().Find(id);
        }
        public T Post(T te)
        {
            DBContext.Add(te);
            DBContext.SaveChanges();
            return te;
        }

        public T Delete(int id)
        {
            T te = DBContext.Set<T>().Find(id);
            DBContext.Remove(te);
            DBContext.SaveChanges();
            return te;
        }
    }
}
