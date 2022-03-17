using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SubmitBloodTestResults.Application.Models
{
    public class ApplicationErrorsConfig
    {
        public Dictionary<string, string> DefaultErrorMessagesByStatusCode { get; set; }
        public string DefaultErrorMessage { get; set; }
    }
}
