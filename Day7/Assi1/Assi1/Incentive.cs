using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Assi1
{
    class Incentive
    {
        public int ID { get; set; }
        public double IncentiveAmount { get; set; }
        public DateTime IncentiveDate { get; set; }

        public override string ToString()
        {
            return $"{ID}, {IncentiveAmount}, {IncentiveDate}";
        }
    }
}

