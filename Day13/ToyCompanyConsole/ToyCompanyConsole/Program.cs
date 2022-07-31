using System;

namespace ToyCompanyConsole
{
    class Program
    {
        static void Main(string[] args)
        {
            DataHelper dt = new DataHelper();
            dt.printCustomerDetails();
            //dt.addCustomer();
            //dt.UpdateCustomer();
            //dt.RemoveCustomer();
            Console.WriteLine("----------------");
            dt.ViewAllProducts();
        }
    }
}
