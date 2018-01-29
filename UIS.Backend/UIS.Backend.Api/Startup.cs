using System;
using System.IO;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Swashbuckle.AspNetCore.Swagger;
using UIS.Backend.Api.Extensions;

namespace UIS.Backend.Api
{
   public class Startup
   {
      public Startup(IConfiguration configuration)
      {
         Configuration = configuration;
      }

      public IConfiguration Configuration { get; }

      // This method gets called by the runtime. Use this method to add services to the container.
      public void ConfigureServices(IServiceCollection services)
      {
         services.AddAuthentication(authOptions =>
            {
               authOptions.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddAzureAdB2CBearer(options => Configuration.Bind("AzureAdB2C", options));

         services.AddSwaggerGen(swaggerOptions =>
         {
            swaggerOptions.SwaggerDoc("v1", new Info
            {
               Version = "v1",
               Title = "University Information System APIs",
               Contact = new Contact { Name = "Szymon Bartnik", Email = "szbartnik@gmail.com", Url = "https://github.com/kneefer" }
            });

            // Set the comments path for the Swagger JSON and UI.
            var basePath = AppContext.BaseDirectory;
            var xmlPath = Path.Combine(basePath, "UIS.Backend.Api.xml");
            swaggerOptions.IncludeXmlComments(xmlPath);
         });

         services.AddMvc();
      }

      // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
      public void Configure(IApplicationBuilder app, IHostingEnvironment env)
      {
         if (env.IsDevelopment())
         {
            app.UseSwagger();
            app.UseDeveloperExceptionPage();
         }

         app.UseSwaggerUI(c =>
         {
            c.SwaggerEndpoint("/swagger/v1/swagger.json", "UIS Global");
         });

         app.UseAuthentication();
         app.UseMvc();
      }
   }
}