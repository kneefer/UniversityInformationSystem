using System.Web.Http;
using UniversityInformationSystem.WebApi.Helpers;

namespace UniversityInformationSystem.WebApi.Controllers
{
    [Authorize]
    [RoutePrefix("api/Admin")]
    public class AdminController : ApiControllerBase
    {
    }
}