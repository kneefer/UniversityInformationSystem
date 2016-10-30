using Microsoft.Owin;
using Owin;
using UniversityInformationSystem.WebApi.App_Start;

[assembly: OwinStartup(typeof(UniversityInformationSystem.WebApi.Startup))]

namespace UniversityInformationSystem.WebApi
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            var kernel = NinjectWebCommon.Bootstrapper.Kernel;
            ConfigureAuth(app, kernel);
        }
    }
}
