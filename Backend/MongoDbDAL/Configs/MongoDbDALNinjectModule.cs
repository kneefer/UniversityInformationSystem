using AutoMapper;
using JetBrains.Annotations;
using Microsoft.AspNet.Identity;
using MongoDB.AspNet.Identity;
using MongoDB.Driver;
using Ninject.Extensions.Factory;
using Ninject.Modules;
using UniversityInformationSystem.DALInterfaces.Helpers;
using UniversityInformationSystem.DALInterfaces.Identity;
using UniversityInformationSystem.DALInterfaces.Repositories;
using UniversityInformationSystem.MongoDbDAL.Helpers;
using UniversityInformationSystem.MongoDbDAL.Identity;
using UniversityInformationSystem.MongoDbDAL.Repositories;

namespace UniversityInformationSystem.MongoDbDAL.Configs
{
    [UsedImplicitly]
    public class MongoDbDALNinjectModule : NinjectModule
    {
        public override void Load()
        {
            // Identity
            Bind<IApplicationUserFactory>().ToFactory();

            Bind<UserManager<IUser>>().To<ApplicationUserManager>();
            Bind<IUser>().To<MongoApplicationUser>();
            Bind(typeof(IUserStore<>)).To(typeof(UserStore<>)).WithConstructorArgument("Mongo");

            // Helpers
            Bind<IMapper>().ToConstant(AutoMapperConfiguration.GetAutoMapperConfiguration()).InSingletonScope();
            Bind<MongoDatabase>().ToConstant(ConnectionManager.Instance.Database).InSingletonScope();
            Bind<IInitializeDB>().To<InitializeDB>();

            // Repositories
            Bind<ITabletsRepository>().To<TabletsRepository>();
        }
    }
}