using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using ToyCompanyConsole.Models;

namespace ToyCompanyConsole
{
    class DataHelper
    {
        public TOY_MAF_COMPANYContext DBContext { get; set; }
        public DataHelper()
        {
            DBContext = new TOY_MAF_COMPANYContext();
        }
        public void printCustomerDetails()
        {
            var CustDetails = DBContext.Customers.ToList();
            
            foreach (var item in CustDetails)
            {
                Console.WriteLine($"{item.CustId}  {item.CustName}  {item.CustEmail}");
            }
        }
        public void addCustomer()
        {
            Customer c1 = new Customer();
            Console.WriteLine("Enter Customer Name : ");
            c1.CustName = Console.ReadLine();
            Console.WriteLine("Enter Email : ");
            c1.CustEmail = Console.ReadLine();

            DBContext.Add(c1);
            DBContext.SaveChanges();
            Console.WriteLine("Customer Added");
        }

        public void UpdateCustomer()
        {
            Console.WriteLine("Enter Customer ID to Update");
            int custID = Convert.ToInt32(Console.ReadLine());

            var customer = DBContext.Customers.FirstOrDefault(c => c.CustId == custID);

            Console.WriteLine($"Enter Customer Name ({customer.CustName}) : ");
            customer.CustName = Console.ReadLine();
            Console.WriteLine($"Enter Email({customer.CustEmail}) : ");
            customer.CustEmail = Console.ReadLine();

            DBContext.Update(customer);
            DBContext.SaveChanges();
            Console.WriteLine("Customer Details Are Updated");
        }

        public void RemoveCustomer()
        {
            Console.WriteLine("Enter Customer ID to Remove");
            int custID = Convert.ToInt32(Console.ReadLine());

            var customer = DBContext.Customers.FirstOrDefault(c => c.CustId == custID);

            DBContext.Remove(customer);
            DBContext.SaveChanges();
            Console.WriteLine("Customer Details Removed");
        }

        public void ViewAllProducts()
        {
            var listofproducts = DBContext.Toys.ToList();
            foreach (var item in listofproducts)
            {
                Console.WriteLine($"{item.ToyId}  {item.ToyName} {item.ToyPrice}  {item.ToyMafAt}");
            }
        }
    }
}
