using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DuckGoProxy_Core.Controllers
{
    public class DuckGoController : Controller
    {


        /*
         Usage Example : 
         https://api.duckduckgo.com/?q=valley+forge+national+park&format=json&pretty=1  
         https://api.duckduckgo.com/?q=simpsons+characters&format=json&pretty=1
         https://api.duckduckgo.com/?q=apple&format=json&pretty=1
         https://api.duckduckgo.com/?q=!imdb+rushmore&format=json&pretty=1&no_redirect=1
         */

        // GET: DuckGoController
        public ActionResult Index()
        {
            return View();
        }

        // GET: DuckGoController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: DuckGoController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: DuckGoController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: DuckGoController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: DuckGoController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: DuckGoController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: DuckGoController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
