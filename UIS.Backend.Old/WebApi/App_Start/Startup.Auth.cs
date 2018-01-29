using System;
using Microsoft.AspNet.Identity;
using Microsoft.Owin;
using Microsoft.Owin.Cors;
using Microsoft.Owin.Security.Cookies;
using Microsoft.Owin.Security.DataProtection;
using Microsoft.Owin.Security.OAuth;
using Ninject;
using Ninject.Parameters;
using Ninject.Syntax;
using Owin;
using UniversityInformationSystem.WebApi.Providers;

namespace UniversityInformationSystem.WebApi
{
    public partial class Startup
    {
        private static OAuthAuthorizationServerOptions OAuthOptions { get; set; }

        public static IDataProtectionProvider DataProtectionProvider { get; private set; }

        private static string PublicClientId { get; set; }

        private static void ConfigureAuth(IAppBuilder app, IResolutionRoot kernel)
        {
            app.UseCors(CorsOptions.AllowAll);
            DataProtectionProvider = app.GetDataProtectionProvider();

            // Enable the application to use a cookie to store information for the signed in user
            // and to use a cookie to temporarily store information about a user logging in with a third party login provider
            app.UseCookieAuthentication(new CookieAuthenticationOptions());
            app.UseExternalSignInCookie(DefaultAuthenticationTypes.ExternalCookie);

            // Configure the application for OAuth based flow
            PublicClientId = "self";
            OAuthOptions = new OAuthAuthorizationServerOptions
            {
                TokenEndpointPath = new PathString("/Token"),
                Provider = kernel.Get<ApplicationOAuthProvider>(new ConstructorArgument("publicClientId", PublicClientId)),
                AuthorizeEndpointPath = new PathString("/api/Account/ExternalLogin"),
                AccessTokenExpireTimeSpan = TimeSpan.FromDays(14),
                AllowInsecureHttp = true
            };

            // Enable the application to use bearer tokens to authenticate users
            app.UseOAuthBearerTokens(OAuthOptions);
        }
    }
}
