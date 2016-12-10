using System.Threading.Tasks;
using JetBrains.Annotations;
using UniversityInformationSystem.DALInterfaces.Models;
using UniversityInformationSystem.DALInterfaces.Repositories;

namespace UniversityInformationSystem.MongoDbDAL.Repositories
{
    [UsedImplicitly]
    internal class EntryRepository : IEntryRepository
    {
        public async Task<EntryDTO> SetContentOfTablet(string tabletId, EntryDTO contentToAdd)
        {
            throw new System.NotImplementedException();
        }

        public async Task<EntryDTO> AddPreviewContent(EntryDTO previewContentToAdd)
        {
            throw new System.NotImplementedException();
        }

        public async Task<EntryDTO> GetCurrentContentOfTablet(string tabletId)
        {
            throw new System.NotImplementedException();
        }

        public async Task<EntryDTO> GetContentsOfTablet(string tabletId)
        {
            throw new System.NotImplementedException();
        }
    }
}
