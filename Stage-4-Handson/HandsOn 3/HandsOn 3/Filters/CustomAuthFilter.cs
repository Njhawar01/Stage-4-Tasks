using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;
using Microsoft.CodeAnalysis.CSharp.Syntax;

namespace HandsOn3.Filters
{

    public class CustomAuthFilter : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext context)
        {
            var header = context.HttpContext.Request.Headers.FirstOrDefault(h => h.Key.Equals("Authorization"));
            if (!header.Equals("null") && header.Value.Contains("Bearer"))
            {
                base.OnActionExecuting(context);
            }
            else
            {
                context.Result = new UnauthorizedResult();
            }
        }
    }
}
