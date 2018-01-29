using System.Collections.Generic;
using System.Threading.Tasks;
using UniversityInformationSystem.DALInterfaces.Models;

namespace UniversityInformationSystem.DALInterfaces.Repositories
{
    public interface IEntriesRepository
    {
        Task<List<EntryDTO>> GetEntriesOfTablet(string userId, string tabletId);
        Task<EntryDTO> GetCurrentEntryOfTablet(string tabletId);
        Task<EntryDTO> AddEntryToTablet(string userId, string tabletId, EntryDTO entryToAdd);
        Task<EntryDTO> GetPreviewEntryById(string previewId);
        Task<EntryDTO> AddPreviewEntry(EntryDTO previewEntryToAdd);
    }
}
