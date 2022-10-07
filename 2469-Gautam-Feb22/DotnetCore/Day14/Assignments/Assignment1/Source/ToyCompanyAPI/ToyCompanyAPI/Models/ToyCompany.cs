using System;
using System.Collections.Generic;

#nullable disable

namespace ToyCompanyAPI.Models
{
    public partial class ToyCompany
    {
        public ToyCompany()
        {
            Toys = new HashSet<Toy>();
        }

        public int PlantId { get; set; }
        public string PlantName { get; set; }
        public string PlantAddress { get; set; }
        public int? ToyTypeId { get; set; }

        public virtual ToyType ToyType { get; set; }
        public virtual ICollection<Toy> Toys { get; set; }
    }
}
