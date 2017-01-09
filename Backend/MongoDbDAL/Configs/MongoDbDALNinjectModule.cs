using AutoMapper;
using JetBrains.Annotations;
using Microsoft.AspNet.Identity;
using MongoDB.Driver;
using Ninject.Extensions.Factory;
using Ninject.Modules;
using Ninject.Web.Common;
using System.Configuration;
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
		private readonly string _connectionUrl;
		private readonly string _dbName;

		public MongoDbDALNinjectModule()
		{
			_connectionUrl = ConfigurationManager.ConnectionStrings["Mongo"].ConnectionString;
			_dbName = ConfigurationManager.AppSettings["DbName"];
		}

        public override void Load()
        {
            // Identity
            Bind<IApplicationUserFactory>().ToFactory();

            Bind<UserManager<IUser>>().To<ApplicationUserManager>().InRequestScope();
            Bind<IUser>().To<MongoApplicationUser>();
            Bind<IUserStore<IUser>>().To<MongoUserStoreWrapper>().InRequestScope()
				.WithConstructorArgument("connectionUrl", _connectionUrl)
				.WithConstructorArgument("dbName", _dbName);

            // Helpers
            Bind<IMapper>().ToConstant(AutoMapperConfiguration.GetAutoMapperConfiguration()).InSingletonScope();
			Bind<MongoDatabase>().ToConstant(ConnectionManager.GetDbConnection(_connectionUrl, _dbName)).InTransientScope();
            Bind<IInitializeDB>().To<InitializeDB>().InRequestScope();

            // Repositories
            Bind<IEntriesRepository>().To<EntriesRepository>();
            Bind<ITabletsRepository>().To<TabletsRepository>();
            Bind<ITemplatesRepository>().To<TemplatesRepository>();
            Bind<IUsersRepository>().To<UsersRepository>();
        }
    }
}