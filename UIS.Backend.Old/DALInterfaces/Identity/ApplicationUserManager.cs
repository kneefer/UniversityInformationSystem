using JetBrains.Annotations;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;

namespace UniversityInformationSystem.DALInterfaces.Identity
{
    [UsedImplicitly]
    public class ApplicationUserManager : UserManager<IUser>
    {
        public ApplicationUserManager(
            IUserStore<IUser> store, 
            IdentityFactoryOptions<ApplicationUserManager> options) 
            : base(store)
        {
            UserValidator = new UserValidator<IUser>(this)
            {
                AllowOnlyAlphanumericUserNames = false,
                RequireUniqueEmail = false
            };

            // Configure validation logic for passwords
            PasswordValidator = new PasswordValidator
            {
                RequiredLength = 5,
                RequireNonLetterOrDigit = false,
                RequireDigit = false,
                RequireLowercase = false,
                RequireUppercase = false,
            };

            var dataProtectionProvider = options.DataProtectionProvider;
            if (dataProtectionProvider != null)
            {
                UserTokenProvider = new DataProtectorTokenProvider<IUser>(
                    dataProtectionProvider.Create("ASP.NET Identity"));
            }
        }
    }
}
