using AutoMapper;
using UniversityInformationSystem.Common.Models;
using UniversityInformationSystem.MongoDbDAL.Models;

namespace UniversityInformationSystem.MongoDbDAL.Configs
{
    public static class MapperConfiguration
    {
        public static void Configure()
        {
            Mapper.Initialize(cfg => 
            {
                cfg.CreateMap<Tablet, TabletDTO>();
                cfg.CreateMap<TabletDTO, Tablet>();
            });
        }
    }
}
