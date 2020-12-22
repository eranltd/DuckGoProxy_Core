using DuckGoProxy_Core.Models;
using DuckGoProxy_Core.Services.Base;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace DuckGoProxy_Core.Services
{
    public class DuckDuckGoService : APIService
    {
        public DuckDuckGoService(HttpClient httpClient, IConfiguration config) : base(httpClient, config) { }

            internal async Task<DuckDuckGoResponseItem> SendGetRequest(string requestUrl, Dictionary<string,string> queryParams)
            {
                //try
                //{
                var response =  await base.SendGETRequest(requestUrl, queryParams);
                string json = JsonConvert.SerializeObject(response.Value);

                DuckDuckGoResponseItem duckDuckGoResponseItem = null;
                duckDuckGoResponseItem = JsonConvert.DeserializeObject<DuckDuckGoResponseItem>(json);

                return duckDuckGoResponseItem;
                //}
                //catch (Exception exc)
                //{
                //    return new JsonResult(new { results = "", error = exc.ToString() });
                //}
            }
        
    }
}
