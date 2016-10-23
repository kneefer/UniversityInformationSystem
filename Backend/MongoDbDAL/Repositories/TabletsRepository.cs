using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using JetBrains.Annotations;
using MongoDB.Bson;
using MongoDB.Driver;
using UniversityInformationSystem.Common.Models;
using UniversityInformationSystem.DALInterfaces.Repositories;
using UniversityInformationSystem.MongoDbDAL.Helpers;
using UniversityInformationSystem.MongoDbDAL.Models;

namespace UniversityInformationSystem.MongoDbDAL.Repositories
{
    [UsedImplicitly]
    internal class TabletsRepository : ITabletsRepository
    {
        private readonly IMongoDatabase _db = ConnectionManager.Instance.Database;

        public async Task<List<TabletDTO>> GetAllTablets()
        {
            var tabletsCollection = _db.GetCollection<Tablet>("tablets");
            var result = await tabletsCollection.Find(new BsonDocument()).ToListAsync();
            return result.Select(Mapper.Map<TabletDTO>).ToList();
        }

        public Task<List<TabletDTO>> GetTabletsOfUser(string userId)
        {
            throw new System.NotImplementedException();
        }
    }
}