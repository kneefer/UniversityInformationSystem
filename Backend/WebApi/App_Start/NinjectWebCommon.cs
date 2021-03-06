using Microsoft.AspNet.Identity.Owin;
using UniversityInformationSystem.DALInterfaces.Identity;
using UniversityInformationSystem.WebApi.Providers;

[assembly: WebActivatorEx.PreApplicationStartMethod(typeof(UniversityInformationSystem.WebApi.App_Start.NinjectWebCommon), "Start")]
[assembly: WebActivatorEx.ApplicationShutdownMethod(typeof(UniversityInformationSystem.WebApi.App_Start.NinjectWebCommon), "Stop")]

// ReSharper disable once CheckNamespace
namespace UniversityInformationSystem.WebApi.App_Start
{
    using System;
    using System.Web;
    using Microsoft.Web.Infrastructure.DynamicModuleHelper;
    using Ninject;
    using Ninject.Web.Common;

    public static class NinjectWebCommon 
    {
        public static readonly Bootstrapper Bootstrapper = new Bootstrapper();

        public static void Start() 
        {
            DynamicModuleUtility.RegisterModule(typeof(OnePerRequestHttpModule));
            DynamicModuleUtility.RegisterModule(typeof(NinjectHttpModule));
            Bootstrapper.Initialize(CreateKernel);
        }
        
        public static void Stop()
        {
            Bootstrapper.ShutDown();
        }
       
        private static IKernel CreateKernel()
        {
            var kernel = new StandardKernel();
            try
            {
                kernel.Bind<Func<IKernel>>().ToMethod(ctx => () => new Bootstrapper().Kernel);
                kernel.Bind<IHttpModule>().To<HttpApplicationInitializationHttpModule>();

                RegisterServices(kernel);

                return kernel;
            }
            catch
            {
                kernel.Dispose();
                throw;
            }
        }

        private static void RegisterServices(IKernel kernel)
        {
            kernel.Bind<ApplicationOAuthProvider>().ToSelf().InSingletonScope();
            kernel.Bind<IdentityFactoryOptions<ApplicationUserManager>>()
                .ToMethod(x => new IdentityFactoryOptions<ApplicationUserManager>()
                {
                    DataProtectionProvider = Startup.DataProtectionProvider
                }).InRequestScope();

            kernel.Load("UniversityInformationSystem.*.dll");
        }        
    }
}
