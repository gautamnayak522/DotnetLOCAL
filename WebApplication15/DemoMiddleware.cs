using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication15
{
    public static class DemoMiddleware
    {
        public static IApplicationBuilder UserDemoMiidleware(this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<DemoImplement>();
        }
    }
    public class DemoImplement
    {

        private RequestDelegate _next; 
        public DemoImplement(RequestDelegate request) => _next = request;


        public async Task Invoke(HttpContext httpContext)
        {
            await _next(httpContext);

        }
    }
}
