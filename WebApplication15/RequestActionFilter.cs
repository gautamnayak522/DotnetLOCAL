using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace WebApplication15
{
    public class RequestActionFilter : ActionFilterAttribute, IActionFilter
    {
        public string RequiredRole { get; set; }

        public override void OnActionExecuting(ActionExecutingContext context)
        {
            var hearder = context.HttpContext.Request.Headers["Authorization"].ToString();
            if (string.IsNullOrEmpty(hearder)||RequiredRole!="Admin")
                context.Result = new UnauthorizedObjectResult("user is unauthorized");
        }
    }
}
