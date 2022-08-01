using System;
using System.Collections.Generic;

#nullable disable

namespace ToyCompanyAPI.Models
{
    public partial class ToyType
    {
        public ToyType()
        {
            ToyCompanies = new HashSet<ToyCompany>();
        }

        public int ToyTypeId { get; set; }
        public string ToyType1 { get; set; }

        public virtual ICollection<ToyCompany> ToyCompanies { get; set; }
    }
}
