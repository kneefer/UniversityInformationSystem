﻿//using Microsoft.AspNet.Identity;
//using Microsoft.AspNet.Identity.Owin;
//using Microsoft.Owin;
//using UniversityInformationSystem.DALInterfaces.Identity;
//using UniversityInformationSystem.WebApi.Models;

//namespace UniversityInformationSystem.WebApi
//{
//    // Configure the application user manager used in this application. UserManager is defined in ASP.NET Identity and is used by the application.

//    public class ApplicationUserManager : UserManager<IApplicationUser>
//    {
//        public ApplicationUserManager(IUserStore<IApplicationUser> store)
//            : base(store)
//        {
//        }

//        public static ApplicationUserManager Create(IdentityFactoryOptions<ApplicationUserManager> options, IOwinContext context)
//        {
//            var manager = new ApplicationUserManager(new UserStore<ApplicationUser>("Mongo"));
//            // Configure validation logic for usernames
//            manager.UserValidator = new UserValidator<ApplicationUser>(manager)
//            {
//                AllowOnlyAlphanumericUserNames = false,
//                RequireUniqueEmail = true
//            };
//            // Configure validation logic for passwords
//            manager.PasswordValidator = new PasswordValidator
//            {
//                RequiredLength = 6,
//                RequireNonLetterOrDigit = true,
//                RequireDigit = true,
//                RequireLowercase = true,
//                RequireUppercase = true,
//            };
//            var dataProtectionProvider = options.DataProtectionProvider;
//            if (dataProtectionProvider != null)
//            {
//                manager.UserTokenProvider = new DataProtectorTokenProvider<ApplicationUser>(dataProtectionProvider.Create("ASP.NET Identity"));
//            }
//            return manager;
//        }
//    }
//}
