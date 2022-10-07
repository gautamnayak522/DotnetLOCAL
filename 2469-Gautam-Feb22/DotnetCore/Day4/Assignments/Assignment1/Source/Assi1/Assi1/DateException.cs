using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Assi1
{
    class DateException : ApplicationException
    {
        public DateException(string message) : base(message)
        {

        }

        public static void validate(DateTime date)
        {
            if(date<DateTime.Today)
                {
                throw new DateException("date should not be less than the current date");
            }
        }
    }
}
