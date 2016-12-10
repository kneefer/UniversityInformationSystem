using System.Threading.Tasks;
using UniversityInformationSystem.DALInterfaces.Models;

namespace UniversityInformationSystem.DALInterfaces.Repositories
{
    public interface IEntryRepository
    {
        Task<EntryDTO> SetContentOfTablet(string tabletId, EntryDTO contentToSet);
        Task<EntryDTO> AddPreviewContent(EntryDTO previewContentToAdd);
        Task<EntryDTO> GetCurrentContentOfTablet(string tabletId);
        Task<EntryDTO> GetContentsOfTablet(string tabletId);
    }
}
