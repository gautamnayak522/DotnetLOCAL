using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ActionFilterPractice
{
    public class AccessActionFilter: ActionFilterAttribute,IActionFilter
    {
        public string RequiredRole { get; set; }
        public override void OnActionExecuting(ActionExecutingContext context)
        {

            var hearder = context.HttpContext.Request.Headers["token"].ToString();
            if (string.IsNullOrEmpty(hearder)&&RequiredRole!="Admin")
                context.Result = new UnauthorizedObjectResult("user is unauthorized");
        }

    }
}
