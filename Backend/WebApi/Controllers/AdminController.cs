using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http;
using UniversityInformationSystem.DALInterfaces.Models;
using UniversityInformationSystem.DALInterfaces.Repositories;

namespace UniversityInformationSystem.WebApi.Controllers
{
    [AllowAnonymous]
    [RoutePrefix("api/Admin")]
    public class AdminController : ApiControllerBase
    {
        private readonly ITabletsRepository _tabletsRepository;
        private readonly ITemplatesRepository _templatesRepository;
        private readonly IUsersRepository _usersRepository;

        public AdminController(
            ITabletsRepository tabletsRepository,
            ITemplatesRepository templatesRepository,
            IUsersRepository usersRepository)
        {
            _tabletsRepository = tabletsRepository;
            _templatesRepository = templatesRepository;
            _usersRepository = usersRepository;
        }

        // GET api/Admin/Tablets
        [Route("Tablets")]
        public async Task<List<TabletDTO>> GetAllTablets()
        {
            var result = await _tabletsRepository.GetAllTablets();
            return result;
        }

        // GET api/Admin/User/{userId}/Tablets
        [Route("User/{userId}/tablets")]
        public async Task<List<TabletDTO>> GetTabletsOfUser(string userId)
        {
            var result = await _tabletsRepository.GetTabletsOfUser(userId);
            return result;
        }

        // GET api/Admin/Tablet/{tabletId}/Users
        [Route("Tablets/{tabletId}/users")]
        public async Task<List<UserDTO>> GetUsersOfTablet(string tabletId)
        {
            var result = await _usersRepository.GetUsersOfTablet(tabletId);
            return result;
        }

        // GET api/Admin/Templates
        [Route("Templates")]
        public async Task<List<TemplateDTO>> GetAllTemplates()
        {
            var result = await _templatesRepository.GetAllTemplates();
            return result;
        }
    }
}