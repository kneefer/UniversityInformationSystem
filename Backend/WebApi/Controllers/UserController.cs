using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http;
using UniversityInformationSystem.DALInterfaces.Models;
using UniversityInformationSystem.DALInterfaces.Repositories;

namespace UniversityInformationSystem.WebApi.Controllers
{
    [Authorize]
    [RoutePrefix("api/User")]
    public class UserController : ApiControllerBase
    {
        private readonly IEntriesRepository _entriesRepository;
        private readonly ITabletsRepository _tabletsRepository;
        private readonly ITemplatesRepository _templatesRepository;
        private readonly IUsersRepository _usersRepository;

        private Task<string> UserId => _usersRepository.GetUserIdByName(User.Identity.Name);

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
            var result = await _usersRepository.GetUserById(await UserId);
            return result;
        }

        // GET api/User/Tablets
        [Route("Tablets")]
        public async Task<List<TabletDTO>> GetTablets()
        {
            var result = await _tabletsRepository.GetTabletsOfUser(await UserId);
            return result;
        }

        // GET api/User/Templates
        [Route("Templates")]
        public async Task<List<TemplateDTO>> GetTemplates()
        {
            var result = await _templatesRepository.GetTemplatesOfUser(await UserId);
            return result;
        }

        // POST api/User/Templates
        [Route("Templates")]
        [HttpPost]
        public async Task<TemplateDTO> AddTemplate(TemplateDTO templateToAdd)
        {
            var result = await _templatesRepository.AddTemplateForUser(await UserId, templateToAdd);
            return result;
        }

        // PUT api/User/Templates
        [Route("Templates")]
        [HttpPut]
        public async Task<TemplateDTO> UpdateTemplate(TemplateDTO templateToUpdate)
        {
            var result = await _templatesRepository.UpdateTemplateOfUser(await UserId, templateToUpdate);
            return result;
        }

        // DELETE api/User/Templates
        [Route("Templates/{idOfTemplateToDelete}")]
        [HttpDelete]
        public async Task DeleteTemplate(string idOfTemplateToDelete)
        {
            await _templatesRepository.DeleteTemplateOfUser(await UserId, idOfTemplateToDelete);
        }

        // GET api/User/Tablets/{tabletId}/Entries
        [Route("Tablets/{tabletId}/Entries")]
        public async Task<List<EntryDTO>> GetEntriesOfTablet(string tabletId)
        {
            var result = await _entriesRepository.GetEntriesOfTablet(await UserId, tabletId);
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
            var result = await _entriesRepository.AddEntryToTablet(await UserId, tabletId, previewEntry);
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