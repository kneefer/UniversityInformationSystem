using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using JetBrains.Annotations;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Builders;
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

        public async Task<UserDTO> GetUserById(string userId)
        {
            var usersCollection = _db.GetCollection<User>("users");
            var result = await Task.Run(() => usersCollection
                .FindOneById(ObjectId.Parse(userId)));
            return _mapper.Map<UserDTO>(result);
        }

        public async Task<string> GetUserIdByName(string userName)
        {
            var usersCollection = _db.GetCollection<User>("users");
            var result = await Task.Run(() => usersCollection
                .Find(Query.EQ("email", userName))
                .SetFields("email")
                .ToList());

            return result[0].Id;
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
            var mapped = _mapper.Map<User>(userToAdd);
            mapped.Templates = new List<Template>();
            var usersCollection = _db.GetCollection<User>("users");
            var result = await Task.Run(() => usersCollection
                .Insert(mapped));

            await Task.Run(() => usersCollection.Update(
                Query.EQ("_id", ObjectId.Parse(mapped.Id)),
                Update.Set("allowedTablets", new BsonArray())));

            return _mapper.Map<UserDTO>(mapped);
        }

        public async Task<UserDTO> UpdateUser(UserDTO updatedUser)
        {
            var usersCollection = _db.GetCollection<User>("users");
            var result = await Task.Run(() => usersCollection
                .Update(Query.EQ("_id", ObjectId.Parse(updatedUser.Id)), Update
                    .Set("firstName", updatedUser.FirstName)
                    .Set("lastName", updatedUser.LastName)
                    .Set("userName", updatedUser.UserName)
                    .Set("email", updatedUser.Email)
                    .Set("description", updatedUser.Description)
            ));
            return _mapper.Map<UserDTO>(updatedUser);
        }

        public async Task BindUserWithTablet(string userIdToBind, string tabletToBind)
        {
            var usersCollection = _db.GetCollection<User>("users");
            var tabletsCollection = _db.GetCollection<Tablet>("tablets");

            await Task.Run(() =>
            {
                usersCollection.Update(Query.EQ("_id", ObjectId.Parse(userIdToBind)), Update
                    .Push("allowedTablets", ObjectId.Parse(tabletToBind)));

                tabletsCollection.Update(Query.EQ("_id", ObjectId.Parse(tabletToBind)), Update
                    .Push("allowedUsers", ObjectId.Parse(userIdToBind)));
            });
        }

        public async Task UnbindUserFromTablet(string userIdToUnbind, string tabletIdToUnbind)
        {
            var tabletsCollection = _db.GetCollection<Tablet>("tablets");
            var usersCollection = _db.GetCollection<User>("users");

            await Task.Run(() =>
            {
                tabletsCollection.Update(Query.EQ("allowedUsers", ObjectId.Parse(userIdToUnbind)), Update
                    .Pull("allowedUsers", ObjectId.Parse(userIdToUnbind)), UpdateFlags.Multi);

                usersCollection.Update(Query.EQ("allowedTablets", ObjectId.Parse(tabletIdToUnbind)), Update
                    .Pull("allowedTablets", ObjectId.Parse(tabletIdToUnbind)), UpdateFlags.Multi);
            });
        }

        public async Task DeleteUser(string userIdToDelete)
        {
            var usersCollection = _db.GetCollection<User>("users");
            var tabletsCollection = _db.GetCollection<Tablet>("tablets");

            await Task.Run(() =>
            {
                usersCollection.Remove(Query.EQ("_id", ObjectId.Parse(userIdToDelete)));
                tabletsCollection.Update(Query.EQ("allowedUsers", ObjectId.Parse(userIdToDelete)), Update
                    .Pull("allowedUsers", ObjectId.Parse(userIdToDelete)), UpdateFlags.Multi);
            });
        }
    }
}
