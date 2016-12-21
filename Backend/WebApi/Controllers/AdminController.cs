using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http;
using Microsoft.AspNet.Identity;
using UniversityInformationSystem.DALInterfaces.Identity;
using UniversityInformationSystem.DALInterfaces.Models;
using UniversityInformationSystem.DALInterfaces.Repositories;

namespace UniversityInformationSystem.WebApi.Controllers
{
    [Authorize(Roles = "admin")]
    [RoutePrefix("api/Admin")]
    public class AdminController : ApiControllerBase
    {
        private readonly ITabletsRepository _tabletsRepository;
        private readonly ITemplatesRepository _templatesRepository;
        private readonly IUsersRepository _usersRepository;

        private readonly UserManager<IUser> _userManager;
        private readonly IApplicationUserFactory _applicationUserFactory;

        public AdminController(
            ITabletsRepository tabletsRepository,
            ITemplatesRepository templatesRepository,
            IUsersRepository usersRepository,

            UserManager<IUser> userManager,
            IApplicationUserFactory applicationUserFactory)
        {
            _tabletsRepository = tabletsRepository;
            _templatesRepository = templatesRepository;
            _usersRepository = usersRepository;

            _userManager = userManager;
            _applicationUserFactory = applicationUserFactory;
        }

        // GET api/Admin/Tablets
        [Route("Tablets")]
        public async Task<List<TabletDTO>> GetAllTablets()
        {
            var result = await _tabletsRepository.GetAllTablets();
            return result;
        }

        // GET api/Admin/Users/{userId}/Tablets
        [Route("Users/{userId}/Tablets")]
        public async Task<List<TabletDTO>> GetTabletsOfUser(string userId)
        {
            var result = await _tabletsRepository.GetTabletsOfUser(userId);
            return result;
        }

        // POST api/Admin/Tablets
        [Route("Tablets")]
        [HttpPost]
        public async Task<TabletDTO> AddTablet(TabletDTO tabletToAdd)
        {
            var result = await _tabletsRepository.AddTablet(tabletToAdd);
            return result;
        }

        // PUT api/Admin/Tablets
        [Route("Tablets")]
        [HttpPut]
        public async Task<TabletDTO> UpdateTablet(TabletDTO tabletToUpdate)
        {
            var result = await _tabletsRepository.UpdateTablet(tabletToUpdate);
            return result;
        }

        // DELETE api/Admin/Tablets
        [Route("Tablets/{idOfTabletToDelete}")]
        [HttpDelete]
        public async Task DeleteTablet(string idOfTabletToDelete)
        {
            await _tabletsRepository.DeleteTablet(idOfTabletToDelete);
        }

        // GET api/Admin/Users
        [Route("Users")]
        public async Task<List<UserDTO>> GetAllUsers()
        {
            var result = await _usersRepository.GetAllUsers();
            return result;
        }

        // GET api/Admin/Tablets/{tabletId}/Users
        [Route("Tablets/{tabletId}/Users")]
        public async Task<List<UserDTO>> GetUsersOfTablet(string tabletId)
        {
            var result = await _usersRepository.GetUsersOfTablet(tabletId);
            return result;
        }

        // POST api/Admin/Users
        [Route("Users")]
        [HttpPost]
        public async Task<IHttpActionResult> AddUser(UserDTO userToAdd)
        {
            var user = _applicationUserFactory.CreateApplicationUser(userToAdd.Email);

            var createResult = await _userManager.CreateAsync(user, "default123");
            if (!createResult.Succeeded)
                return GetErrorResult(createResult);

            var mongoResult = await _usersRepository.AddUser(userToAdd);

            return Ok();
        }

        // PUT api/Admin/Users
        [Route("Users")]
        [HttpPut]
        public async Task<UserDTO> UpdateUser(UserDTO userToUpdate)
        {
            var result = await _usersRepository.UpdateUser(userToUpdate);
            return result;
        }

        // DELETE api/Admin/Users
        [Route("Users/{idOfUserToDelete}")]
        [HttpDelete]
        public async Task<IHttpActionResult> DeleteUser(string idOfUserToDelete)
        {
            var userToDelete = await _usersRepository.GetUserById(idOfUserToDelete);
            var user = _applicationUserFactory.CreateApplicationUser(userToDelete.Email);

            var deleteResult = await _userManager.DeleteAsync(user);
            if (!deleteResult.Succeeded)
                return GetErrorResult(deleteResult);

            await _usersRepository.DeleteUser(idOfUserToDelete);

            return Ok();
        }

        // GET api/Admin/Templates
        [Route("Templates")]
        public async Task<List<TemplateDTO>> GetAllTemplates()
        {
            var result = await _templatesRepository.GetAllTemplates();
            return result;
        }

        // POST api/Admin/Users/{userId}/Bind
        [Route("Users/{userId}/BindTablet/{tabletId}")]
        [HttpPost]
        public async Task BindUserWithTablet(string userId, string tabletId)
        {
            await _usersRepository.BindUserWithTablet(userId, tabletId);
        }

        // DELETE api/Admin/Users/{userId}/UnbindTablet/{tabletId}
        [Route("Users/{userId}/UnbindTablet/{tabletId}")]
        [HttpDelete]
        public async Task UnindUserFromTablet(string userId, string tabletId)
        {
            await _usersRepository.UnbindUserFromTablet(userId, tabletId);
        }
    }
}