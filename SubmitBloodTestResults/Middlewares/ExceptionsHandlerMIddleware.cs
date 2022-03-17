using System;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System.Net;
using System.Threading.Tasks;
using SubmitBloodTestResults.Application.Middlewares;
using SubmitBloodTestResults.Application.Models;
using Serilog;

namespace SubmitBloodTestResults.Frontend.Middlewares
{
    public class ExceptionsHandlerMIddleware
    {
        private readonly RequestDelegate _next;

        public ExceptionsHandlerMIddleware()
        {

        }
        public ExceptionsHandlerMIddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task InvokeAsync(HttpContext httpContext, IOptions<ApplicationErrorsConfig> config)
        {
            try
            {
                await _next(httpContext);

                // Hanlde default 404 response
                if (httpContext.Response.StatusCode == (int)HttpStatusCode.NotFound)
                {
                    throw new HttpStatusException("Not Found", HttpStatusCode.NotFound);
                }
            }
            catch (Exception ex)
            {
                await HandleExceptionAsync(httpContext, ex, config.Value);
            }
        }



        private Task HandleExceptionAsync(HttpContext context, Exception exception, ApplicationErrorsConfig config)
        {
            context.Response.ContentType = "application/json";
            int statusCode = HttpStatusCode.InternalServerError.GetHashCode();
            string errorMessage = exception.Message.ToString();
            Log.Error(errorMessage, exception);
            if (exception is HttpStatusException)
            {
                var httpStatusException = exception as HttpStatusException;
                statusCode = httpStatusException.statusCode.GetHashCode();

                if (!string.IsNullOrWhiteSpace(httpStatusException.error))
                {
                    errorMessage = httpStatusException.error;
                    Log.Fatal(errorMessage, "Application start-up failed in exception handler");
                }
                else if (config.DefaultErrorMessagesByStatusCode.ContainsKey(statusCode.ToString()))
                {
                    errorMessage = config.DefaultErrorMessagesByStatusCode[statusCode.ToString()];
                }
            }


            context.Response.StatusCode = statusCode;
            return context.Response.WriteAsync(JsonConvert.SerializeObject(new ApiErrorResponse(statusCode, errorMessage), new JsonSerializerSettings
            {
                ContractResolver = new CamelCasePropertyNamesContractResolver()
            }));
        }
    }
}
