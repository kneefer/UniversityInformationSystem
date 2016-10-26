using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using JetBrains.Annotations;
using MongoDB.Driver;
using UniversityInformationSystem.DALInterfaces.Models;
using UniversityInformationSystem.DALInterfaces.Repositories;

namespace UniversityInformationSystem.MongoDbDAL.Repositories
{
    [UsedImplicitly]
    internal class UsersRepository : IUsersRepository
    {
        private readonly MongoDatabase _db;
        private readonly IMapper _mapper;

        public UsersRepository(IMapper mapper, MongoDatabase db)
        {
            _db = db;
            _mapper = mapper;
        }

        public Task<List<UserDTO>> GetAllUsers()
        {
            throw new NotImplementedException();
        }

        public Task<List<UserDTO>> GetUsersOfTablet(string tabletId)
        {
            throw new NotImplementedException();
        }

        public Task<UserDTO> AddUser(UserDTO userToAdd)
        {
            throw new NotImplementedException();
        }

        public Task<UserDTO> UpdateUser(UserDTO updatedUser)
        {
            throw new NotImplementedException();
        }

        public Task DeleteUser(UserDTO userToDelete)
        {
            throw new NotImplementedException();
        }
    }
}
