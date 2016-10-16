using System.Web.Mvc;

namespace UniversityInformationSystem.WebApi.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return Redirect("/Help");
        }
    }
}
