﻿using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(UniversityInformationSystem.WebApi.Startup))]

namespace UniversityInformationSystem.WebApi
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}