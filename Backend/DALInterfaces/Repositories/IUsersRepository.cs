﻿using System.Collections.Generic;
using System.Threading.Tasks;
using UniversityInformationSystem.DALInterfaces.Models;

namespace UniversityInformationSystem.DALInterfaces.Repositories
{
    public interface IUsersRepository
    {
        Task<UserDTO> GetUserById(string userId);
        Task<string> GetUserIdByName(string userName);
        Task<List<UserDTO>> GetAllUsers();
        Task<List<UserDTO>> GetUsersOfTablet(string tabletId);
        Task<UserDTO> AddUser(UserDTO userToAdd);
        Task<UserDTO> UpdateUser(UserDTO updatedUser);
        Task BindUserWithTablet(string userIdToBind, string tabletIdToBind);
        Task UnbindUserFromTablet(string userIdToUnbind, string tabletIdToUnbind);
        Task DeleteUser(string userIdToDelete);
    }
}
