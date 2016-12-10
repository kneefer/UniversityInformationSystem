using System.Collections.Generic;
using System.Threading.Tasks;
using JetBrains.Annotations;
using UniversityInformationSystem.DALInterfaces.Models;
using UniversityInformationSystem.DALInterfaces.Repositories;

namespace UniversityInformationSystem.MongoDbDAL.Repositories
{
    [UsedImplicitly]
    internal class EntryRepository : IEntryRepository
    {
        public Task<List<EntryDTO>> GetEntriesOfTablet(string tabletId)
        {
            throw new System.NotImplementedException();
        }

        public Task<EntryDTO> GetCurrentEntryOfTablet(string tabletId)
        {
            throw new System.NotImplementedException();
        }

        public Task<EntryDTO> AddEntryToTablet(string tabletId, EntryDTO entryToAdd)
        {
            throw new System.NotImplementedException();
        }

        public Task<EntryDTO> GetPreviewEntryById(string previewId)
        {
            throw new System.NotImplementedException();
        }

        public Task<EntryDTO> AddPreviewEntry(EntryDTO previewEntryToAdd)
        {
            throw new System.NotImplementedException();
        }
    }
}
