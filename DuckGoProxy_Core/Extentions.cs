using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DuckGoProxy_Core
{
    public static  class Extentions
    {
        #region Extentions
        public static string GetJSONValue(this JObject jObject, string key) => GetJSONValues(jObject, key).FirstOrDefault(s => !string.IsNullOrEmpty(s)) ?? "";

        public static string[] GetJSONValues(this JObject jObject, string key)
        {

            if (jObject == null || string.IsNullOrEmpty(key)) return null;
            return jObject.Descendants()
                                          .OfType<JProperty>()
                                          .Where(p => p.Name.ToLower() == key.ToLower())
                                          .Select(x => x.Value.ToString())
                                          .ToArray();
        }

        public static string Truncate(this string source, int length)
        {
            if (source.Length > length)
            {
                source = source.Substring(0, length);
            }
            return source;
        }
        #endregion

    }
}
    

