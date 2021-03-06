﻿using DuckGoProxy_Core.Models;
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


        internal async Task<IList<Topic>> SendGetRequest(Dictionary<string, string> queryParams)
        {
            var endpoint = _config.GetSection("DUCKDUCKGO_RESULTS_API_ENDPOINT").Value;
            return await SendGetRequest(endpoint, queryParams);
        }

        internal async Task<IList<Topic>> SendGetRequest(string requestUrl, Dictionary<string, string> queryParams)
        {
            try
            {
                var response = await base.SendGETRequest(requestUrl, queryParams);
                string json = response.Value as string;
                DuckDuckGoResponseItem duckDuckGoResponseItem = null;
                duckDuckGoResponseItem = JsonConvert.DeserializeObject<DuckDuckGoResponseItem>(json);

                var flatternArray = duckDuckGoResponseItem.Results.Where(x=>x.Topics !=null).SelectMany(x => x.Topics).ToList();
                var flat = duckDuckGoResponseItem.Results.Where(x=>x.Topics == null).Select(s => new Topic(s.URL, s.Title)).ToList();

                flat = flat.Concat(flatternArray).ToList();

                //return duckDuckGoResponseItem;
                return flat.ToList();
            }
            catch (Exception exc)
            {
                return null;
            }

        }
    }
}
