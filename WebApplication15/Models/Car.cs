using System;
using System.Collections.Generic;

#nullable disable

namespace WebApplication15.Models
{
    public partial class Car
    {
        public int Id { get; set; }
        public int CustomerId { get; set; }
        public int EmployeeId { get; set; }
        public string Model { get; set; }
        public string Status { get; set; }
        public int TotalCost { get; set; }

        public virtual Customer Customer { get; set; }
        public virtual Employee Employee { get; set; }
    }
}
