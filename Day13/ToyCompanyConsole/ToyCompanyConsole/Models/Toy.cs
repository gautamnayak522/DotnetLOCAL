using System;
using System.Collections.Generic;

#nullable disable

namespace ToyCompanyConsole.Models
{
    public partial class Toy
    {
        public Toy()
        {
            OrderedItems = new HashSet<OrderedItem>();
        }

        public int ToyId { get; set; }
        public string ToyName { get; set; }
        public int? ToyPrice { get; set; }
        public int? ToyMafAt { get; set; }

        public virtual ToyCompany ToyMafAtNavigation { get; set; }
        public virtual ICollection<OrderedItem> OrderedItems { get; set; }
    }
}
