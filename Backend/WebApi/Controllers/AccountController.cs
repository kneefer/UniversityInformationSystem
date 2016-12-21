using System.Threading.Tasks;
using System.Web.Http;
using Microsoft.AspNet.Identity;
using UniversityInformationSystem.DALInterfaces.Identity;
using UniversityInformationSystem.WebApi.Models;

namespace UniversityInformationSystem.WebApi.Controllers
{
    [Authorize]
    [RoutePrefix("api/Account")]
    public class AccountController : ApiControllerBase
    {
        private readonly UserManager<IUser> _userManager;
        private readonly IApplicationUserFactory _applicationUserFactory;

        public AccountController(
            UserManager<IUser> userManager,
            IApplicationUserFactory applicationUserFactory)
        {
            _userManager = userManager;
            _applicationUserFactory = applicationUserFactory;
        }

        [Route("IsAdmin")]
        public bool GetIsAdmin()
        {
            return User.IsInRole("admin");
        }

        [Route("IsUser")]
        public bool GetIsUser()
        {
            return User.IsInRole("user");
        }

        [Authorize(Roles = "DenyAll")] // Replace with [AllowAnonymouse] attribute if needed
        [Route("Register")]
        public async Task<IHttpActionResult> Register(RegisterBindingModel model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var user = _applicationUserFactory.CreateApplicationUser(model.Email);
            var result = await _userManager.CreateAsync(user, model.Password);

            return !result.Succeeded 
                ? GetErrorResult(result) 
                : Ok();
        }
    }
}