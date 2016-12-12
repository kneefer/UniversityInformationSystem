using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using JetBrains.Annotations;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Builders;
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
            var usersCollection = _db.GetCollection<User>("users");
            var result = await Task.Run(() => usersCollection
                .FindAll()
                .SetFields("templates"));
            var flattened = result.SelectMany(x => x.Templates);
            return flattened.Select(_mapper.Map<TemplateDTO>).ToList();
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

        public async Task<TemplateDTO> AddTemplateForUser(string userId, TemplateDTO templateToAdd)
        {
            var mapped = _mapper.Map<Template>(templateToAdd);
            mapped.Id = ObjectId.GenerateNewId().ToString();
            var usersCollection = _db.GetCollection<User>("users");
            var result = await Task.Run(() => usersCollection.Update(
                Query.EQ("_id", ObjectId.Parse(userId)),
                Update.PushWrapped("templates", mapped)
            ));

            return _mapper.Map<TemplateDTO>(mapped);
        }

        public async Task<TemplateDTO> UpdateTemplateOfUser(string userId, TemplateDTO updatedTemplate)
        {
            var usersCollection = _db.GetCollection<User>("users");
            var result = await Task.Run(() => usersCollection
                .Update(Query.EQ("_id", ObjectId.Parse(userId)), Update
                    .Set("name", updatedTemplate.Name)
                    .Set("htmlContent", updatedTemplate.HtmlContent)
                    .Set("description", updatedTemplate.Description)
                    .SetWrapped("tokens", updatedTemplate.Tokens)
            ));
            return updatedTemplate;
        }

        public async Task DeleteTemplateOfUser(string userId, string idOfTemplateToDelete)
        {
            throw new NotImplementedException();
        }
    }
}
