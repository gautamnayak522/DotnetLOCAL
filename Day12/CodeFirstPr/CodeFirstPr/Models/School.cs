using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CodeFirstPr.Models
{
    public class School
    {
        [Key]
        public int SchoolID { get; set; }
        public string SchoolName { get; set; }
        public string Address { get; set; }
    }
}
