using System.Collections.Generic;
using System.Threading.Tasks;
using UniversityInformationSystem.DALInterfaces.Models;

namespace UniversityInformationSystem.DALInterfaces.Repositories
{
    public interface IUsersRepository
    {
        Task<List<UserDTO>> GetAllUsers();
        Task<List<UserDTO>> GetUsersOfTablet(string tabletId);
        Task<UserDTO> UpdateUser(UserDTO updatedUser);
        Task DeleteUser(UserDTO userToDelete);
    }
}
