using System.Collections.Generic;
using System.Threading.Tasks;
using UniversityInformationSystem.DALInterfaces.Models;

namespace UniversityInformationSystem.DALInterfaces.Repositories
{
    public interface ITabletsRepository
    {
        Task<List<TabletDTO>> GetAllTablets();
        Task<List<ExtendedTabletDTO>> GetTabletExtendedInfo(string tabletId);
        Task<List<TabletDTO>> GetTabletsOfUser(string userId);
        Task<TabletDTO> AddTablet(TabletDTO tabletToAdd);
        Task<TabletDTO> UpdateTablet(string tabletId, TabletDTO updatedTablet);
        Task DeleteTablet(string tabletIdToDelete);
    }
}