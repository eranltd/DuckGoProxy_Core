using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DuckGoProxy_Core.Models
{
    public class Topic
    {
        [JsonProperty("id")]

        public long id => _date.Ticks;

        readonly DateTime _date;
        public Topic(string url, string title)
        {
            URL = url;
            Title = title;
            _date = DateTime.Now;
        }

        [JsonProperty("FirstURL")]
        public string FirstURL { set { URL = value; } }

        [JsonProperty("Text")]
        public string Text { set { Title = value; } }

        [JsonProperty("Topics")]
        public IList<Topic> _topics { set { Topics = value; } }

        [JsonIgnore]
        public IList<Topic> Topics {get;set;}

        [JsonProperty("URL")]
        public string URL { get; set; }

        [JsonProperty("Title")]
        public string Title { get; set; }
    }
}
