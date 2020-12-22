using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DuckGoProxy_Core.Models
{
    public class DuckDuckGoResponseItem
    {
        [JsonProperty("RelatedTopics")]
        public IList<RelatedTopic> Topics { get; set; }
    }
}
