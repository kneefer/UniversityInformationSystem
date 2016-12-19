using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Threading.Tasks;
using System.Web;
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

        [AllowAnonymous]
        [Route("Register")]
        public async Task<IHttpActionResult> Register(RegisterBindingModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var user = _applicationUserFactory.CreateApplicationUser(model.Email);

            IdentityResult result = await _userManager.CreateAsync(user, model.Password);

            if (!result.Succeeded)
            {
                return GetErrorResult(result);
            }

            return Ok();
        }
    }
}