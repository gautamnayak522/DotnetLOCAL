using System;
using System.Collections.Generic;

#nullable disable

namespace jwtPractice.Models
{
    public partial class Drug
    {
        public Drug()
        {
            DrugTimings = new HashSet<DrugTiming>();
        }

        public int DrugId { get; set; }
        public string DrugName { get; set; }

        public virtual ICollection<DrugTiming> DrugTimings { get; set; }
    }
}
