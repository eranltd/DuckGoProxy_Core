using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.WebUtilities;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace DuckGoProxy_Core.Services.Base
{
    public class APIService
    {
        public readonly HttpClient _httpClient;
        public readonly IConfiguration _config;

        public APIService(HttpClient httpClient, IConfiguration config)
        {
            _httpClient = httpClient;
            _config = config;
        }


        public virtual async Task<JsonResult> SendGETRequest(string requestUrl, Dictionary<string, string> QueryParams = null)
        {
            string response = String.Empty;
            try
            {
                string url = QueryHelpers.AddQueryString(requestUrl, QueryParams);
                HttpResponseMessage response_new = await _httpClient.GetAsync(url);
                response_new.EnsureSuccessStatusCode();
                response = await response_new.Content.ReadAsStringAsync();


                return new JsonResult(response);

            }
            catch (Exception exc)
            {

                return new JsonResult(exc);

            }

        }



        public virtual async Task<JsonResult> SendPOSTRequest(string requestUrl, string json)
        {
            dynamic ret;
            string response = String.Empty;
            var watch = new Stopwatch();
            try
            {
                watch.Start();

                var transferContent = new StringContent(json, Encoding.UTF8, "application/json");
                HttpResponseMessage response_new = await _httpClient.PostAsync(requestUrl, transferContent);
                response_new.EnsureSuccessStatusCode();

                response = await response_new.Content.ReadAsStringAsync();

                watch.Stop();
                var responseTimeForCompleteRequest = watch.Elapsed.TotalSeconds;
                ret = GenerateServiceResponse(response, responseTimeForCompleteRequest, "");
            }
            catch (Exception exc)
            {
                watch.Stop();
                var responseTimeForCompleteRequest = watch.Elapsed.TotalSeconds;
                ret = GenerateServiceResponse(null, responseTimeForCompleteRequest, exc.ToString().Truncate(500));
            }

            return new JsonResult(ret);
        }

        public static dynamic GenerateServiceResponse(string json, double Elapsed, string ErrorResponse) => new
        {
            results = json,
            Elapsed = Elapsed,
            Error = ErrorResponse
        };

    }
}
