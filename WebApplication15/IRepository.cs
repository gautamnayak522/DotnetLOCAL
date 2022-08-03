using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using WebApplication15.Models;

namespace WebApplication15
{
    public interface IRepository<TEntity> where TEntity : class
    {
        TEntity Add(TEntity entity);
    }

    public class Repository<T>: IRepository<T> where T : class
    {
        public DemoDbContext DbContext { get; set; }
        public Repository(DemoDbContext demoDbContext)
        {
            DbContext = demoDbContext;
        }
        public T Add(T entity)
        {
            DbContext.Add(entity);
            DbContext.SaveChanges();
            return entity;
        }
    }
}
