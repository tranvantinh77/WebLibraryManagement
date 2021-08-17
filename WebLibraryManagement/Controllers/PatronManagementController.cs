using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebLibraryManagement.Models;

namespace WebLibraryManagement.Controllers
{
    public class PatronManagementController : Controller
    {
        // GET: PatronManagement

        WebLibraryManagementEntities db = new WebLibraryManagementEntities();

        public ActionResult Index()
        {
            var lstPatron = from pt in db.patrons where pt.active_fag == 0 select pt;
            return View(lstPatron);
        }
    }
}