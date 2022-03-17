using SubmitBloodTestResults.Application.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SubmitBloodTestResults.Application.Models
{
    public class ApiErrorResponse : ApiResponse<string>
    {
        public ApiErrorResponse(int statusCode, string errorMessage)
            : base(statusCode, null)
        {
            Error = errorMessage;
        }
    }
}
