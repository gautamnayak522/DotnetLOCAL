using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Assi1
{
    class NameException : ApplicationException
    {
        public NameException(string message) : base(message)
        {
        }
        public static void validate(string name)
        {
            if(name=="gautam")
            {
                throw new NameException("This user is blocked");
            }
        }
    }
}
