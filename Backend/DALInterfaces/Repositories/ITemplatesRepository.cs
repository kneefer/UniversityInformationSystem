using System.Collections.Generic;
using System.Threading.Tasks;
using UniversityInformationSystem.DALInterfaces.Models;

namespace UniversityInformationSystem.DALInterfaces.Repositories
{
    public interface ITemplatesRepository
    {
        Task<List<TemplateDTO>> GetAllTemplates();
        Task<List<TemplateDTO>> GetTemplatesOfUser(string userId);
        Task<TemplateDTO> UpdateTemplate(TemplateDTO updatedTemplate);
        Task DeleteTemplate(TemplateDTO templateToDelete);
    }
}