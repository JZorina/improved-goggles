﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SubmitBloodTestResults.Application.ViewModels
{
    public class ApiResponse<T>
    {
        public ApiResponse(int _statusCode, object _data)
        {
            StatusCode = _statusCode;
            Data = _data;
        }

        public int StatusCode { get; set; }
        public string Error { get; set; }
        public object Data { get; set; }
    }
}
