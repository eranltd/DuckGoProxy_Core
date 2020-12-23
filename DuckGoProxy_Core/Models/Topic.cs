using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DuckGoProxy_Core.Models
{
    public class Topic
    {
        public Topic(string uRL, string title)
        {
            URL = uRL;
            Title = title;
        }

        [JsonProperty("FirstURL")]
        public string URL { get; set; }

        [JsonProperty("Text")]
        public string Title { get; set; }

        [JsonProperty("Topics")]

        public IList<Topic> Topics { get; set; }
    }
}
