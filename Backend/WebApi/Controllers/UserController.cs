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
        private readonly IEntriesRepository _entriesRepository;
        private readonly ITabletsRepository _tabletsRepository;
        private readonly ITemplatesRepository _templatesRepository;
        private readonly IUsersRepository _usersRepository;

        private const string UserId = "584c42c090dc88ce7d9bc190";

        public UserController(
            IEntriesRepository entriesRepository,
            ITabletsRepository tabletsRepository,
            ITemplatesRepository templatesRepository,
            IUsersRepository usersRepository)
        {
            _entriesRepository = entriesRepository;
            _tabletsRepository = tabletsRepository;
            _templatesRepository = templatesRepository;
            _usersRepository = usersRepository;
        }

        // GET api/User/SelfInfo
        [Route("SelfInfo")]
        public async Task<UserDTO> GetSelfUserInfo()
        {
            var result = await _usersRepository.GetUserById(UserId);
            return result;
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

        // POST api/Admin/Templates
        [Route("Templates")]
        [HttpPost]
        public async Task<TemplateDTO> AddTemplate(TemplateDTO templateToAdd)
        {
            var result = await _templatesRepository.AddTemplateForUser(UserId, templateToAdd);
            return result;
        }

        // PUT api/Admin/Templates
        [Route("Templates")]
        [HttpPut]
        public async Task<TemplateDTO> UpdateTemplate(TemplateDTO templateToUpdate)
        {
            var result = await _templatesRepository.UpdateTemplateOfUser(UserId, templateToUpdate);
            return result;
        }

        // DELETE api/Admin/Templates
        [Route("Templates/{idOfTemplateToDelete}")]
        [HttpDelete]
        public async Task DeleteTemplate(string idOfTemplateToDelete)
        {
            await _templatesRepository.DeleteTemplateOfUser(UserId, idOfTemplateToDelete);
        }

        // GET api/User/Tablets/{tabletId}/Entries
        [Route("Tablets/{tabletId}/Entries")]
        public async Task<List<EntryDTO>> GetEntriesOfTablet(string tabletId)
        {
            var result = await _entriesRepository.GetEntriesOfTablet(UserId, tabletId);
            return result;
        }

        // GET api/User/Tablets/{tabletId}/CurrentEntry
        [Route("Tablets/{tabletId}/CurrentEntry")]
        [AllowAnonymous]
        public async Task<EntryDTO> GetCurrentEntryOfTablet(string tabletId)
        {
            var result = await _entriesRepository.GetCurrentEntryOfTablet(tabletId);
            return result;
        }

        // POST api/User/Tablets/{tabletId}/Entries
        [Route("Tablets/{tabletId}/Entries")]
        [HttpPost]
        public async Task<EntryDTO> AddEntryToTablet([FromUri]string tabletId, [FromBody]EntryDTO previewEntry)
        {
            var result = await _entriesRepository.AddEntryToTablet(UserId, tabletId, previewEntry);
            return result;
        }

        // GET api/User/Previews/{previewId}
        [Route("Previews/{previewId}")]
        public async Task<EntryDTO> GetPreviewEntry(string previewId)
        {
            var result = await _entriesRepository.GetPreviewEntryById(previewId);
            return result;
        }

        // POST api/User/Previews/{previewId}
        [Route("Previews")]
        [HttpPost]
        public async Task<EntryDTO> AddPreviewEntry(EntryDTO previewEntry)
        {
            var result = await _entriesRepository.AddPreviewEntry(previewEntry);
            return result;
        }
    }
}