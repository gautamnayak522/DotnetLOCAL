using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserManagement.Models;

namespace UserManagement
{
    public interface IRepository<TEntity> where TEntity : class
    {
        List<TEntity> Get();
        TEntity Get(int id);
        TEntity Post(TEntity te);
        TEntity Delete(TEntity te);
        TEntity Put(TEntity te, TEntity newte);
    }
    public class Repository<T> :IRepository<T> where T : class
    {
        public USERDBContext  DBContext { get; set; }
        public Repository(USERDBContext uSERDBContext)
        {
            DBContext = uSERDBContext;
        }

        public List<T> Get()
        {
            return DBContext.Set<T>().ToList();
        }

        public T Get(int id)
        {
            T te = DBContext.Set<T>().Find(id);
            return te;
        }

        public T Post(T te)
        {
            DBContext.Add(te);
            DBContext.SaveChanges();
            return te;
        }

        public T Delete(T te)
        {
            DBContext.Remove(te);
            DBContext.SaveChanges();
            return te;
        }

        public T Put(T te, T newte)
        {
            DBContext.Entry(te).CurrentValues.SetValues(newte);
            DBContext.SaveChanges();
            return newte;
        }
    }
}
