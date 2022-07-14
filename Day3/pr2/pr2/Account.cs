using System;
using System.Collections.Generic;
using System.Text;

namespace pr2
{
    abstract class Account
    {
        public int accID { get; }
        public int custID { get; }
        public string custName { get; }
        public int Balance { get; }

        public Account(int accid,int cid,string name,int bal)
        {
            this.accID = accid;
            this.custID = cid;
            this.custName = name;
            this.Balance = bal;
        }
    }

    class Saving : Account
    {
        public int intRate { get; }

        public Saving(int accid, int cid, string name, int bal, int intrt):base(accid,cid,name,bal)
        {
            this.intRate = intrt;
        }
    }
    class Current : Account
    {
        public int chargeRate { get; }

        public Current(int accid, int cid, string name, int bal, int chgrt) : base(accid, cid, name, bal)
        {
            this.chargeRate = chgrt;
        }

    }
}
