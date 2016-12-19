using System.Web.Http;
using Microsoft.AspNet.Identity;
using UniversityInformationSystem.DALInterfaces.Identity;

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
    }
}