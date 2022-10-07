using System;
using System.Collections.Generic;

#nullable disable

namespace Flipkart.Models
{
    public partial class State
    {
        public State()
        {
            UserAddresses = new HashSet<UserAddress>();
        }

        public int StateId { get; set; }
        public string StateName { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? ModifiedAt { get; set; }

        public virtual ICollection<UserAddress> UserAddresses { get; set; }
    }
}
