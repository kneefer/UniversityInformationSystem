﻿using System.Collections.Generic;
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
        private readonly IEntriesRepository _entriesRepository;

        private const string UserId = "584c42c090dc88ce7d9bc190";

        public UserController(
            ITabletsRepository tabletsRepository,
            ITemplatesRepository templatesRepository,
            IEntriesRepository entriesRepository)
        {
            _tabletsRepository = tabletsRepository;
            _templatesRepository = templatesRepository;
            _entriesRepository = entriesRepository;
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
            var result = await _entriesRepository.AddEntryToTablet(tabletId, previewEntry);
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