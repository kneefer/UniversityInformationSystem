using System;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using UniversityInformationSystem.WebApi.Helpers;

namespace UniversityInformationSystem.WebApi
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        private static readonly Dictionary<string, string> KnownAssemblies;

        static WebApiApplication()
        {
            KnownAssemblies = AssembliesHelpers.GetKnownAssemblies();
            AppDomain.CurrentDomain.AssemblyResolve += (s, e) => AssembliesHelpers.Resolve(KnownAssemblies, s, e);
        }

        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
        }
    }
}
