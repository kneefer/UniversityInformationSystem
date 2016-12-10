using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http;
using UniversityInformationSystem.DALInterfaces.Models;
using UniversityInformationSystem.DALInterfaces.Repositories;

namespace UniversityInformationSystem.WebApi.Controllers
{
    [AllowAnonymous]
    [RoutePrefix("api/User")]
    public class UserController : ApiControllerBase
    {
        private readonly ITabletsRepository _tabletsRepository;
        private readonly ITemplatesRepository _templatesRepository;

        private const string UserId = "584c42c090dc88ce7d9bc190";

        public UserController(
            ITabletsRepository tabletsRepository,
            ITemplatesRepository templatesRepository)
        {
            _tabletsRepository = tabletsRepository;
            _templatesRepository = templatesRepository;
        }

        // GET api/User/Tablets
        [Route("Tablets")]
        public async Task<List<TabletDTO>> GetTablets()
        {
            var result = await _tabletsRepository.GetTabletsOfUser(UserId);
            return result;
        }

        // GET api/User/Templates
        [Route("Templates")]
        public async Task<List<TemplateDTO>> GetTemplates()
        {
            var result = await _templatesRepository.GetTemplatesOfUser(UserId);
            return result;
        }
    }
}