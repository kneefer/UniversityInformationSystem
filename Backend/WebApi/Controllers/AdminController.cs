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
        private readonly IUsersRepository _usersRepository;

        public AdminController(
            ITabletsRepository tabletsRepository,
            IUsersRepository usersRepository)
        {
            _tabletsRepository = tabletsRepository;
            _usersRepository = usersRepository;
        }

        // GET api/Admin/Tablets
        [Route("Tablets")]
        public async Task<List<TabletDTO>> GetTablets()
        {
            var result = await _tabletsRepository.GetAllTablets();
            return result;
        }

        // GET api/Admin/User/{userId}/tablets
        [Route("User/{userId}/tablets")]
        public async Task<List<TabletDTO>> GetTabletsOfUser(string userId)
        {
            var result = await _tabletsRepository.GetTabletsOfUser(userId);
            return result;
        }

        // GET api/Admin/Tablet/{tabletId}/users
        [Route("Tablets/{tabletId}/users")]
        public async Task<List<UserDTO>> GetUsersOfTablet(string tabletId)
        {
            var result = await _usersRepository.GetUsersOfTablet(tabletId);
            return result;
        }
    }
}