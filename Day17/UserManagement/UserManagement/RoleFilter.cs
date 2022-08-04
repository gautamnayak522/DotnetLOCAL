using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UserManagement
{
    public class RoleFilter:ActionFilterAttribute,IActionFilter
    {
        public string RequiredRole { get; set; }

        public override void OnActionExecuting(ActionExecutingContext context)
        {

            if(RequiredRole != "Admin")
            {
                context.Result = new UnauthorizedObjectResult("No Access : Only Admins Can Access");
            }  
        }
    }
}
