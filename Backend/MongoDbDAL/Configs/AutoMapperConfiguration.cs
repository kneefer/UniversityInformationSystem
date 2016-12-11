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

                cfg.CreateMap<User, UserDTO>();
                cfg.CreateMap<UserDTO, User>();

                cfg.CreateMap<Template, TemplateDTO>();
                cfg.CreateMap<TemplateDTO, Template>();

                cfg.CreateMap<Token, TokenDTO>();
                cfg.CreateMap<TokenDTO, Token>();

                cfg.CreateMap<Entry, EntryDTO>();
                cfg.CreateMap<EntryDTO, Entry>();
            });

            var mapper = config.CreateMapper();
            return mapper;
        }
    }
}
