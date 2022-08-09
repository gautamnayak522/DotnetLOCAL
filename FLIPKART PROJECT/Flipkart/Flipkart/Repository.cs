using Flipkart.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Flipkart
{
    public interface IRepository<TEntity> where TEntity : class
    {
        List<TEntity> Get();
        TEntity Get(int id);
        TEntity Post(TEntity te);
        TEntity Delete(TEntity te);
        TEntity Put(TEntity te, TEntity newentity);
        TEntity Patch(TEntity te);
    }
    public class Repository<T> : IRepository<T> where T : class
    {

        public FlipkartDBContext DBContext { get; set; }
        public Repository(FlipkartDBContext flipkartDBContext)
        {
            DBContext = flipkartDBContext;
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

        public T Put(T te, T newentity)
        {
            DBContext.Entry(te).CurrentValues.SetValues(newentity);
            DBContext.SaveChanges();
            return newentity;
        }
        public T Patch(T entity)
        {
            DBContext.Set<T>().Update(entity);
            DBContext.SaveChanges();
            return entity;
        }
    }
}
