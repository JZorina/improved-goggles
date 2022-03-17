using FluentValidation.Results;
using Microsoft.AspNetCore.Mvc;
using SubmitBloodTestResults.Application.Interfaces;
using SubmitBloodTestResults.Application.Middlewares;
using SubmitBloodTestResults.Application.Requests;
using SubmitBloodTestResults.Application.Utils;
using SubmitBloodTestResults.Application.Validators;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using ValidationResult = FluentValidation.Results.ValidationResult;

namespace SubmitBloodTestResults.Frontend.Controllers
{
    public class TestResultsController : BaseController
    {
        private readonly ITestResultsService _testResultsService;
        public TestResultsController(ITestResultsService testResultsService)
        {
            _testResultsService = testResultsService;
        }
        // POST: api/TestResults/get-blood-tests
        [HttpPost("get-blood-tests")]
        [ProducesResponseType(400)]
        [ProducesResponseType(200)]
        public async Task<IActionResult> GetBloodTests(BloodTestRequest body)
        {
            RunValidationForBloodResultTest(body);
            var result = await _testResultsService.GetBloodTestResults(body);
            return GetResponse(result);

        }

        private bool RunValidationForBloodResultTest(BloodTestRequest body)
        {
            var validator = new BloodTestResultValidator();
            ValidationResult results = validator.Validate(body);
            bool success = results.IsValid;
            List<ValidationFailure> failures = results.Errors;
            if (failures.Count() > Consts.ZERO)
            {
               throw new HttpStatusException(failures[0].ErrorMessage, HttpStatusCode.BadRequest);
            }
            return success;
        }
    }
}
