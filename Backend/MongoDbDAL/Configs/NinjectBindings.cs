using Ninject;
using UniversityInformationSystem.DALInterfaces.Helpers;
using UniversityInformationSystem.DALInterfaces.Repositories;
using UniversityInformationSystem.MongoDbDAL.Helpers;
using UniversityInformationSystem.MongoDbDAL.Repositories;

namespace UniversityInformationSystem.MongoDbDAL.Configs
{
    public static class NinjectBindingsModule
    {
        public static void Load(IKernel kernel)
        {
            // Helpers
            kernel.Bind<IInitializeDB>().To<InitializeDB>();

            // Repositories
            kernel.Bind<ITabletsRepository>().To<TabletsRepository>();
        }
    }
}