using DuckGoProxy_Core.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DuckGoProxy_Core.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DuckGoController : ControllerBase
    {
        private readonly DuckDuckGoService _duckDuckGoService;
        private readonly ILogger<DuckGoController> _logger;

        public DuckGoController(DuckDuckGoService duckDuckGoService)
        {
            _duckDuckGoService = duckDuckGoService;
        }
        /*
         Usage Example : 
         https://api.duckduckgo.com/?q=valley+forge+national+park&format=json&pretty=1  
         https://api.duckduckgo.com/?q=simpsons+characters&format=json&pretty=1
         https://api.duckduckgo.com/?q=apple&format=json&pretty=1
         https://api.duckduckgo.com/?q=!imdb+rushmore&format=json&pretty=1&no_redirect=1
         */

        // GET: DuckGoController
        [HttpGet]
        [ResponseCache(VaryByHeader = "User-Agent", Duration = 30)] //maximize performance
        public async Task<ActionResult> Get([FromQuery] string q = "")
        {
            try
            {
                var queryParams = new Dictionary<string, string>();
                queryParams.Add("q", q);
                queryParams.Add("format", "json");
                var response = await _duckDuckGoService.SendGetRequest(queryParams);
                return new JsonResult(response);
            }
           catch(Exception exc)
            {
                return new JsonResult(exc);
            }
        }

        /*https://localhost:44399/DuckGo/IsAlive*/
        [HttpGet]
        [Route("IsAlive")]
        public IActionResult IsAlive() => Ok("I'm Alive");
    }
}
