using System.Net.Http;
using System.Web.Http;
using Microsoft.AspNet.Identity;
using Microsoft.Owin.Security;

namespace UniversityInformationSystem.WebApi.Controllers
{
    public class ApiControllerBase : ApiController
    {
        protected IAuthenticationManager Authentication => Request.GetOwinContext().Authentication;

        protected IHttpActionResult GetErrorResult(IdentityResult result)
        {
            if (result == null)
                return InternalServerError();

            if (result.Succeeded)
                return null;

            if (result.Errors != null)
            {
                foreach (string error in result.Errors)
                {
                    ModelState.AddModelError("", error);
                }
            }

            if (ModelState.IsValid)
                return BadRequest();

            return BadRequest(ModelState);
        }
    }
}
