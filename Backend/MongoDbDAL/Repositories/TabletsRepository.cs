using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using JetBrains.Annotations;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Builders;
using UniversityInformationSystem.DALInterfaces.Models;
using UniversityInformationSystem.DALInterfaces.Repositories;
using UniversityInformationSystem.MongoDbDAL.Models;

namespace UniversityInformationSystem.MongoDbDAL.Repositories
{
    [UsedImplicitly]
    internal class TabletsRepository : ITabletsRepository
    {
        private readonly MongoDatabase _db;
        private readonly IMapper _mapper;

        public TabletsRepository(IMapper mapper, MongoDatabase db)
        {
            _db = db;
            _mapper = mapper;
        }

        public async Task<List<TabletDTO>> GetAllTablets()
        {
            var tabletsCollection = _db.GetCollection<Tablet>("tablets");
            var result = await Task.Run(() => tabletsCollection
                .FindAll()
                .SetFields("name", "description")
                .ToList());
            return result.Select(_mapper.Map<TabletDTO>).ToList();
        }

        public async Task<List<TabletDTO>> GetTabletsOfUser(string userId)
        {
            var tabletsCollection = _db.GetCollection<Tablet>("tablets");
            var result = await Task.Run(() => tabletsCollection
                .Find(new QueryDocument("allowedUsers", ObjectId.Parse(userId)))
                .SetFields("name", "description")
                .ToList());
            return result.Select(_mapper.Map<TabletDTO>).ToList();
        }

        public async Task<TabletDTO> AddTablet(TabletDTO tabletToAdd)
        {
            var mapped = _mapper.Map<Tablet>(tabletToAdd);
            var tabletsCollection = _db.GetCollection<Tablet>("tablets");
            var result = await Task.Run(() => tabletsCollection
                .Insert(mapped));
            return _mapper.Map<TabletDTO>(mapped);
        }

        public async Task<TabletDTO> UpdateTablet(TabletDTO updatedTablet)
        {
            var tabletsCollection = _db.GetCollection<Tablet>("tablets");
            var result = await Task.Run(() => tabletsCollection
                .Update(Query.EQ("_id", ObjectId.Parse(updatedTablet.Id)), Update
                    .Set("name", updatedTablet.Name)
                    .Set("description", updatedTablet.Description)
            ));
            return updatedTablet;
        }

        public async Task DeleteTablet(string tabletIdToDelete)
        {
            throw new NotImplementedException();
        }
    }
}