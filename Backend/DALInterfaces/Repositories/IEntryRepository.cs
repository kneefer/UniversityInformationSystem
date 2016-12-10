using System.Collections.Generic;
using System.Threading.Tasks;
using UniversityInformationSystem.DALInterfaces.Models;

namespace UniversityInformationSystem.DALInterfaces.Repositories
{
    public interface IEntryRepository
    {
        Task<List<EntryDTO>> GetEntriesOfTablet(string tabletId);
        Task<EntryDTO> GetCurrentEntryOfTablet(string tabletId);
        Task<EntryDTO> AddEntryToTablet(string tabletId, EntryDTO entryToAdd);
        Task<EntryDTO> GetPreviewEntryById(string previewId);
        Task<EntryDTO> AddPreviewEntry(EntryDTO previewEntryToAdd);
    }
}
