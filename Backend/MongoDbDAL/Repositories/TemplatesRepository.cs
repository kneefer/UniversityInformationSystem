using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using JetBrains.Annotations;
using MongoDB.Driver;
using UniversityInformationSystem.DALInterfaces.Models;
using UniversityInformationSystem.DALInterfaces.Repositories;

namespace UniversityInformationSystem.MongoDbDAL.Repositories
{
    [UsedImplicitly]
    internal class TemplatesRepository : ITemplatesRepository
    {
        private readonly MongoDatabase _db;
        private readonly IMapper _mapper;

        public TemplatesRepository(IMapper mapper, MongoDatabase db)
        {
            _db = db;
            _mapper = mapper;
        }

        public Task<List<TemplateDTO>> GetAllTemplates()
        {
            throw new NotImplementedException();
        }

        public Task<List<TemplateDTO>> GetTemplatesOfUser(string userId)
        {
            throw new NotImplementedException();
        }

        public Task<TemplateDTO> AddTemplate(TemplateDTO templateToAdd)
        {
            throw new NotImplementedException();
        }

        public Task<TemplateDTO> UpdateTemplate(string templateId, TemplateDTO updatedTemplate)
        {
            throw new NotImplementedException();
        }

        public Task DeleteTemplate(TemplateDTO templateToDelete)
        {
            throw new NotImplementedException();
        }
    }
}
