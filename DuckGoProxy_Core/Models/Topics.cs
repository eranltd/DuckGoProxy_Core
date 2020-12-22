using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DuckGoProxy_Core.Models
{
    public class Topics
    {
        [JsonProperty("Topics")]
        public IList<RelatedTopic> Topics2 { get; set; }
    }
}
