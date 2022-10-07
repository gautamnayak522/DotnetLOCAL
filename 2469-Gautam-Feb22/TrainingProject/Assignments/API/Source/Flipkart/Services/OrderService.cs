using Flipkart.Interfaces;
using Flipkart.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;

namespace Flipkart.Services
{
    public class OrderService : Repository<Order>, IOrder
    {
        public flipkart2469gautamContext DBContext { get; set; }
        public OrderService(flipkart2469gautamContext flipkart2469GautamContext) : base(flipkart2469GautamContext)
        {
            DBContext = flipkart2469GautamContext;
        }


        public dynamic OrderwithmasterDetails(Order o)
        {
            DBContext.Add(o);
            DBContext.SaveChanges();
            o.User = DBContext.Users.Find(o.UserId);

            var smtp = new SmtpClient()
            {
                Host = "mail.mailtest.radixweb.net",
                EnableSsl = true,
                UseDefaultCredentials = true,
                Port = 587,
                Credentials = new NetworkCredential("testdotnet@mailtest.radixweb.net", "deep70")
            };

            var mailMessage = new MailMessage("testdotnet@mailtest.radixweb.net", "gjnayak522@gmail.com")
            {
                Subject = $"Order No : {o.OrderNo}",
                Body = $"Dear Customer, Thank you for your recent purchase \n Order No : {o.OrderNo} \n Order Date : {o.OrderDate} \n Order Amount : {o.TotalAmount}  ",
                IsBodyHtml = true
            };

            smtp.Send(mailMessage);
            return o;
        }

        public dynamic GetOrderMaster()
        {
            return DBContext.Orders
                .Include(x => x.User)
                .Include(x => x.Orderitems)
                .Include(p => p.Orderstatus)
                .Select(x => new
                {
                x.OrderId,
                x.OrderNo,
                x.UserId,
                OrderDate = Convert.ToDateTime(x.OrderDate).Date,
                x.OrderstatusId,
                x.Orderstatus.Status,
                x.DeleveryAddressId,
                x.TotalAmount,
                FirstName = x.User.FirstName,
                lastName = x.User.LastName,
                MobileNo = x.User.MobileNo,
                EmailAddress = x.User.EmailAddress,
                Orderitems = x.Orderitems.Select(p => new { p.OrderitemId, p.ProductId, p.Qty })
                });
        }

        public dynamic GetOrderStatuses()
        {
            return DBContext.OrderStatuses.ToList();
        }

        public dynamic GetOrdersofUser(int userId)
        {
            return DBContext.Orders
                .Include(x => x.DeleveryAddress)
                .Include(x => x.User)
                .Where(x => x.User.UserId == userId)
                .Select(x => new
                {
                    x.OrderId,
                    x.OrderNo,
                    x.OrderDate,
                    x.OrderstatusId,
                    x.Orderstatus.Status,
                    x.DeleveryAddressId,
                    x.TotalAmount,
                    FirstName = x.User.FirstName,
                    lastName = x.User.LastName,
                    MobileNo = x.User.MobileNo,
                    EmailAddress = x.User.EmailAddress,
                    Address = x.DeleveryAddress,
                    Orderitems = x.Orderitems.Select(p => new { p.OrderitemId, p.ProductId, p.Qty })
                });
                 }
        
        public dynamic GetOrderbyOrderNo(string orderNo)
        {
            return DBContext.Orders
                    .Include(x => x.User)
                    .Include(x => x.Orderitems)
                    .Include(p => p.Orderstatus)
                    .Include(x => x.DeleveryAddress)
                    .Where(x => x.OrderNo == orderNo)
                    .Select(x => new
                     {
                         x.OrderId,
                         x.OrderNo,
                         x.UserId,
                         OrderDate = Convert.ToDateTime(x.OrderDate).ToShortDateString(),
                         x.OrderstatusId,
                         x.Orderstatus.Status,
                         x.DeleveryAddressId,
                         x.TotalAmount,
                         FirstName = x.User.FirstName,
                         lastName = x.User.LastName,
                         MobileNo = x.User.MobileNo,
                         EmailAddress = x.User.EmailAddress,
                         Address = x.DeleveryAddress,
                         Orderitems = x.Orderitems.Select(p => new { p.OrderitemId, p.ProductId, p.Product.ProductName, p.Product.Price, p.Qty })
                     }).FirstOrDefault();
        }
    }
}

