using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practice3
{
    class Standard
    {
        public int StandardID { get; set; }
        public string Name { get; set; }

        public override string ToString()
        {
            return $"StandardID : {StandardID}, Name : {Name}";
        }
    }
}
