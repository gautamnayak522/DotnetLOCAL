using System;
using System.Collections.Generic;

#nullable disable

namespace ActionFilterPractice.Models
{
    public partial class DrugTiming
    {
        public int DrugTimeId { get; set; }
        public int? PatientId { get; set; }
        public int? DrugId { get; set; }
        public string DrugTime { get; set; }

        public virtual Drug Drug { get; set; }
        public virtual Patient Patient { get; set; }
    }
}
