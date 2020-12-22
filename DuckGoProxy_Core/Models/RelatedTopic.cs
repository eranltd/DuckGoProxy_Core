using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DuckGoProxy_Core.Models
{
    public class RelatedTopic
    {
        [JsonProperty("FirstURL")]
        public string URL { get; set; }

        [JsonProperty("Text")]
        public string Title { get; set; }

        [JsonProperty("Topics")]

        public IList<RelatedTopic> Topics { get; set; }
    }
}
