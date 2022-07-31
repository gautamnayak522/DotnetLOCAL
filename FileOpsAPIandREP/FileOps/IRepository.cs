using FileOps.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FileOps
{
    public interface IRepository <TEntity> where TEntity:class
    {
         List<TEntity> Get();
    }
    public class Repository <T> : IRepository<T> where T : class
    {
        public SHOPING_SYSTEMContext DBContext { get; set; }
        public Repository(SHOPING_SYSTEMContext demoDbContext)
        {
            DBContext = demoDbContext;
        }
        public List<T> Get()
        {
            return DBContext.Set<T>().ToList();

        }
    }
}
