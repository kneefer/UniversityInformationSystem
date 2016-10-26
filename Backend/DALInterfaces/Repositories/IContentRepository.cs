using System.Threading.Tasks;
using UniversityInformationSystem.DALInterfaces.Models;

namespace UniversityInformationSystem.DALInterfaces.Repositories
{
    public interface IContentRepository
    {
        Task<ContentDTO> SetContentOfTablet(string tabletId, ContentDTO contentToSet);
        Task<ContentDTO> SetContentOfTabletUsingExisting(string tabletId, string existingContentId);
        Task<ContentDTO> AddPreviewContent(ContentDTO previewContentToAdd);
        Task<ContentDTO> GetCurrentContentOfTablet(string tabletId);
        Task<ContentDTO> GetContentsOfTablet(string tabletId);
    }
}
