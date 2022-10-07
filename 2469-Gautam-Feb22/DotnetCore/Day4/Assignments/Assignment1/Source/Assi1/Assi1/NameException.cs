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
            bool result = name.All(Char.IsLetter);
            if (!result)
            {
                throw new NameException("Name Should Contais Letters Only");
            }
        }
    }
}
