using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http;
using UniversityInformationSystem.Common.Models;
using UniversityInformationSystem.DALInterfaces.Repositories;

namespace UniversityInformationSystem.WebApi.Controllers
{
    [Authorize]
    [RoutePrefix("api/Admin")]
    public class AdminController : ApiControllerBase
    {
        private readonly ITabletsRepository _tabletsRepository;

        public AdminController(ITabletsRepository tabletsRepository)
        {
            _tabletsRepository = tabletsRepository;
        }

        // GET api/Admin/Tablets
        [Route("Tablets")]
        public async Task<List<TabletDTO>> GetTablets()
        {
            var result = await _tabletsRepository.GetAllTablets();
            return result;
        }
    }
}