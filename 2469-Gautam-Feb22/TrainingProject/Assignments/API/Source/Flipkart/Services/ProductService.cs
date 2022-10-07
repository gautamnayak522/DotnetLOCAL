using Flipkart.Interfaces;
using Flipkart.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Data.Entity.Core.Objects;
using System.Linq;
using System.Threading.Tasks;

namespace Flipkart.Services
{
    public class ProductService: Repository<Product>, IProduct
    {
        public flipkart2469gautamContext DBContext { get; set; }
        public ProductService(flipkart2469gautamContext flipkartDBContext) : base(flipkartDBContext)
        {
            DBContext = flipkartDBContext;
        }

        public dynamic GetWithImages()
        {
            var returndata = DBContext.Products.Include(x=>x.ProductImages).ToList();
            return returndata;
        }

        public dynamic GetProductMaster()
        {
            //var returndata = DBContext.Products.Include(x => x.ProductImages).Include(y=>y.Cat.Cat).ToList();
            //return returndata;

            var returndata = DBContext.Products.Include(a => a.ProductImages).Include(y => y.Cat.Cat).Include(z => z.ProductColours).Include(a=>a.ProductSizes).Select(a =>
                      new
                      {
                          ProductId = a.ProductId,
                          ProductName = a.ProductName,
                          CatName = a.Cat.Cat.CatName,
                          SubCatName = a.Cat.SubcatName,
                          BrandName = a.Brand.BrandName,
                          Description = a.Description,
                          Price = a.Price,
                          ProductImages = a.ProductImages.Select(p => p.ImageUrl),
                          ProductColours = a.ProductColours.Select(p => new { Color = p.Color, IsAvailable = p.IsAvailable }),
                          AvailableQuantity = a.ProductsInventories.Select(p => p.Qty).FirstOrDefault(),
                          ProductSizes = a.ProductSizes.Select(p=> new { Size = p.Size, IsAvailable = p.IsAvailable})
                      });
            return returndata;
        }
    }
}
