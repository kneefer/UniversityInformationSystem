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
    internal class TemplatesRepository : ITabletsRepository
    {
        private readonly MongoDatabase _db;
        private readonly IMapper _mapper;

        public TemplatesRepository(IMapper mapper, MongoDatabase db)
        {
            _db = db;
            _mapper = mapper;
        }

        public Task<List<TabletDTO>> GetAllTablets()
        {
            throw new NotImplementedException();
        }

        public Task<List<ExtendedTabletDTO>> GetTabletExtendedInfo(string tabletId)
        {
            throw new NotImplementedException();
        }

        public Task<List<TabletDTO>> GetTabletsOfUser(string userId)
        {
            throw new NotImplementedException();
        }

        public Task<TabletDTO> AddTablet(TabletDTO tabletToAdd)
        {
            throw new NotImplementedException();
        }

        public Task<TabletDTO> UpdateTablet(string tabletId, TabletDTO updatedTablet)
        {
            throw new NotImplementedException();
        }

        public Task DeleteTablet(string tabletIdToDelete)
        {
            throw new NotImplementedException();
        }
    }
}
