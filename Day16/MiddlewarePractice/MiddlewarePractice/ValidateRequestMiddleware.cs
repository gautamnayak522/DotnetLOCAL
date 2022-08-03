using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MiddlewarePractice
{
    // You may need to install the Microsoft.AspNetCore.Http.Abstractions package into your project
    public class ValidateRequestMiddleware
    {
        private readonly RequestDelegate _next;

        public ValidateRequestMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public Task Invoke(HttpContext httpContext)
        {
            if (!httpContext.Request.Headers.ContainsKey("token"))
            //if (httpContext.Request.Headers["token"].FirstOrDefault()?.Split(" ").Last()=="aaaaaaa")
            {

                httpContext.Response.StatusCode = 401;
                return httpContext.Response.WriteAsync("UnAuthorized");

            }
            else
            {
            return _next(httpContext);
            }

        }
    }

    // Extension method used to add the middleware to the HTTP request pipeline.
    public static class ValidateRequestMiddlewareExtensions
    {
        public static IApplicationBuilder UseValidateRequestMiddleware(this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<ValidateRequestMiddleware>();
        }
    }
}
