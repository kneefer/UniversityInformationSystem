using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http;
using UniversityInformationSystem.DALInterfaces.Models;
using UniversityInformationSystem.DALInterfaces.Repositories;

namespace UniversityInformationSystem.WebApi.Controllers
{
    [RoutePrefix("api/User")]
    public class UserController : ApiControllerBase
    {
        private readonly ITabletsRepository _tabletsRepository;
        private const string UserId = "584c013b5d6c683fc428c018";

        public UserController(ITabletsRepository tabletsRepository)
        {
            _tabletsRepository = tabletsRepository;
        }

        // GET api/User/Tablets
        [Route("Tablets")]
        public async Task<List<TabletDTO>> GetTablets()
        {
            var result = await _tabletsRepository.GetTabletsOfUser(UserId);
            return result;
        }
    }
}