using System.Threading.Tasks;
using JetBrains.Annotations;
using UniversityInformationSystem.DALInterfaces.Models;
using UniversityInformationSystem.DALInterfaces.Repositories;

namespace UniversityInformationSystem.MongoDbDAL.Repositories
{
    [UsedImplicitly]
    internal class ContentRepository : IContentRepository
    {
        public Task<ContentDTO> SetContentOfTablet(string tabletId, ContentDTO contentToAdd)
        {
            throw new System.NotImplementedException();
        }

        public Task<ContentDTO> SetContentOfTabletUsingExisting(string tabletId, string existingContentId)
        {
            throw new System.NotImplementedException();
        }

        public Task<ContentDTO> AddPreviewContent(ContentDTO previewContentToAdd)
        {
            throw new System.NotImplementedException();
        }

        public Task<ContentDTO> GetCurrentContentOfTablet(string tabletId)
        {
            throw new System.NotImplementedException();
        }

        public Task<ContentDTO> GetContentsOfTablet(string tabletId)
        {
            throw new System.NotImplementedException();
        }
    }
}
