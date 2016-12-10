using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using JetBrains.Annotations;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Linq;
using UniversityInformationSystem.DALInterfaces.Models;
using UniversityInformationSystem.DALInterfaces.Repositories;
using UniversityInformationSystem.MongoDbDAL.Models;

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

        public async Task<List<TemplateDTO>> GetAllTemplates()
        {
            throw new NotImplementedException();
        }

        public async Task<List<TemplateDTO>> GetTemplatesOfUser(string userId)
        {
            var usersCollection = _db.GetCollection<User>("users");
            var result = await Task.Run(() => usersCollection
                .Find(new QueryDocument("_id", ObjectId.Parse(userId)))
                .SetFields("templates")
                .First());
            return result.Templates.Select(_mapper.Map<TemplateDTO>).ToList();
        }

        public async Task<TemplateDTO> AddTemplate(TemplateDTO templateToAdd)
        {
            throw new NotImplementedException();
        }

        public async Task<TemplateDTO> UpdateTemplate(string templateId, TemplateDTO updatedTemplate)
        {
            throw new NotImplementedException();
        }

        public async Task DeleteTemplate(TemplateDTO templateToDelete)
        {
            throw new NotImplementedException();
        }
    }
}
