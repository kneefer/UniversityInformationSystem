using System;
using JetBrains.Annotations;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;

namespace UIS.Backend.Api.Extensions
{
   public static class AzureAdServiceCollectionExtensions
   {
      public static AuthenticationBuilder AddAzureAdB2CBearer(
         this AuthenticationBuilder builder,
         Action<AzureAdB2COptions> configureOptions)
      {
         builder.Services.Configure(configureOptions);
         builder.Services.AddSingleton<IConfigureOptions<JwtBearerOptions>, ConfigureAzureOptions>();
         builder.AddJwtBearer();
         return builder;
      }

      [UsedImplicitly(ImplicitUseKindFlags.InstantiatedNoFixedConstructorSignature)]
      private class ConfigureAzureOptions : IConfigureNamedOptions<JwtBearerOptions>
      {
         private readonly AzureAdB2COptions _azureOptions;

         public ConfigureAzureOptions(IOptions<AzureAdB2COptions> azureOptions)
         {
            _azureOptions = azureOptions.Value;
         }

         public void Configure(string name, JwtBearerOptions options)
         {
            options.Audience = _azureOptions.ClientId;
            options.Authority =
               $"{_azureOptions.Instance}/{_azureOptions.Domain}/{_azureOptions.SignUpSignInPolicyId}/v2.0";
         }

         public void Configure(JwtBearerOptions options)
         {
            Configure(Options.DefaultName, options);
         }
      }
   }
}