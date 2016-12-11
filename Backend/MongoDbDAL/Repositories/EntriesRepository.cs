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
    internal class EntriesRepository : IEntriesRepository
    {
        private readonly MongoDatabase _db;
        private readonly IMapper _mapper;

        public EntriesRepository(IMapper mapper, MongoDatabase db)
        {
            _db = db;
            _mapper = mapper;
        }

        public async Task<List<EntryDTO>> GetEntriesOfTablet(string userId, string tabletId)
        {
            var tabletsCollection = _db.GetCollection<Tablet>("tablets");
            var result = await Task.Run(() => tabletsCollection
                .Find(new QueryDocument
                {
                    { "_id", ObjectId.Parse(tabletId)},
                    { "allowedUsers", ObjectId.Parse(userId) }
                })
                .SetFields("entries")
                .First());
            return result.Entries.Select(_mapper.Map<EntryDTO>).ToList();
        }

        public async Task<EntryDTO> GetCurrentEntryOfTablet(string tabletId)
        {
            var tabletsCollection = _db.GetCollection<Tablet>("tablets");
            var result = await Task.Run(() => tabletsCollection
                .Find(new QueryDocument("_id", ObjectId.Parse(tabletId)))
                .SetFields("entries")
                .First());

            var entry = result.Entries.OrderByDescending(x => x.Date).First();
            return _mapper.Map<EntryDTO>(entry);
        }

        public async Task<EntryDTO> AddEntryToTablet(string tabletId, EntryDTO entryToAdd)
        {
            var mapped = _mapper.Map<Entry>(entryToAdd);
            mapped.Id = ObjectId.GenerateNewId().ToString();
            var tabletsCollection = _db.GetCollection<Entry>("tablets");
            var result = await Task.Run(() => tabletsCollection.Update(
                new QueryDocument("_id", ObjectId.Parse(tabletId)), 
                Update.PushWrapped("entries", mapped)
            ));

            return _mapper.Map<EntryDTO>(mapped);
        }

        public async Task<EntryDTO> GetPreviewEntryById(string previewId)
        {
            var previewsCollection = _db.GetCollection<Entry>("previews");
            var result = await Task.Run(() => previewsCollection
                .FindOneById(ObjectId.Parse(previewId)));

            return _mapper.Map<EntryDTO>(result);
        }

        public async Task<EntryDTO> AddPreviewEntry(EntryDTO previewEntryToAdd)
        {
            var mapped = _mapper.Map<Entry>(previewEntryToAdd);
            var previewsCollection = _db.GetCollection<Entry>("previews");
            var result = await Task.Run(() => previewsCollection.Insert(mapped));
            return _mapper.Map<EntryDTO>(mapped);
        }
    }
}
