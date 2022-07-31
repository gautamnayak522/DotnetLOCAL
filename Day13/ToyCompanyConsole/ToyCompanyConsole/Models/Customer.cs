﻿using System;
using System.Collections.Generic;

#nullable disable

namespace ToyCompanyConsole.Models
{
    public partial class Customer
    {
        public Customer()
        {
            CustAddresses = new HashSet<CustAddress>();
            Orders = new HashSet<Order>();
        }

        public int CustId { get; set; }
        public string CustName { get; set; }
        public string CustEmail { get; set; }

        public virtual ICollection<CustAddress> CustAddresses { get; set; }
        public virtual ICollection<Order> Orders { get; set; }
    }
}
