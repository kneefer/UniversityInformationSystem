using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using JetBrains.Annotations;
using MongoDB.Bson;
using MongoDB.Driver;
using UniversityInformationSystem.DALInterfaces.Models;
using UniversityInformationSystem.DALInterfaces.Repositories;
using UniversityInformationSystem.MongoDbDAL.Models;

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

        public async Task<List<UserDTO>> GetAllUsers()
        {
            var usersCollection = _db.GetCollection<User>("users");
            var result = await Task.Run(() => usersCollection
                .FindAll()
                .SetFields("firstName", "lastName", "userName", "email", "description")
                .ToList());
            return result.Select(_mapper.Map<UserDTO>).ToList();
        }

        public async Task<List<UserDTO>> GetUsersOfTablet(string tabletId)
        {
            var usersCollection = _db.GetCollection<User>("users");
            var result = await Task.Run(() => usersCollection
                .Find(new QueryDocument("allowedTablets", ObjectId.Parse(tabletId)))
                .SetFields("firstName", "lastName", "userName", "email", "description")
                .ToList());
            return result.Select(_mapper.Map<UserDTO>).ToList();
        }

        public async Task<UserDTO> AddUser(UserDTO userToAdd)
        {
            throw new NotImplementedException();
        }

        public async Task<UserDTO> UpdateUser(UserDTO updatedUser)
        {
            throw new NotImplementedException();
        }

        public async Task DeleteUser(UserDTO userToDelete)
        {
            throw new NotImplementedException();
        }
    }
}
