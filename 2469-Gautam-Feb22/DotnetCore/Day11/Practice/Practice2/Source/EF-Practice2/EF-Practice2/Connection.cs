using Microsoft.Data.SqlClient;
using Microsoft.IdentityModel.Protocols;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Configuration;


namespace EF_Practice2
{
    class Connection
    {
        public Connection()
        {
            string name = ConfigurationManager.ConnectionStrings["EXAMDB"].ConnectionString;
            
            using (SqlConnection con = new SqlConnection(name))
            {
                con.Open();
                Console.WriteLine("Connection Opened");

                SqlCommand query = new SqlCommand("select * from Product", con);
                
                SqlDataReader sqlDataReader = query.ExecuteReader();
               
                while (sqlDataReader.Read())
                {
                    Console.WriteLine(String.Format("{0} \t | {1} \t | {2} \t | {3}", sqlDataReader[0], sqlDataReader[1], sqlDataReader[2], sqlDataReader[3]));
                }
                
                sqlDataReader.Close();
            }
        }


    }
}
