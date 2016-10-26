using AutoMapper;
using UniversityInformationSystem.DALInterfaces.Models;
using UniversityInformationSystem.MongoDbDAL.Models;

namespace UniversityInformationSystem.MongoDbDAL.Configs
{
    internal static class AutoMapperConfiguration
    {
        internal static IMapper GetAutoMapperConfiguration()
        {
            var config = new MapperConfiguration(cfg =>
            {
                cfg.CreateMap<Tablet, TabletDTO>();
                cfg.CreateMap<TabletDTO, Tablet>();
            });

            var mapper = config.CreateMapper();
            return mapper;
        }
    }
}
