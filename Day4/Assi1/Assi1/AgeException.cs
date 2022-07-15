﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Assi1
{
    class AgeException : ApplicationException
    {
        public AgeException(string message) : base(message)
        {
        }
        public static void validate(int age)
        {
            if(age<0)
            {
                throw new AgeException("Age should not be less than 0");
            }
        }
    }
}
