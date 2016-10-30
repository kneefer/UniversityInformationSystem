using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;

namespace UniversityInformationSystem.DALInterfaces.Identity
{
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
                RequireUniqueEmail = true
            };

            // Configure validation logic for passwords
            PasswordValidator = new PasswordValidator
            {
                RequiredLength = 6,
                RequireNonLetterOrDigit = true,
                RequireDigit = true,
                RequireLowercase = true,
                RequireUppercase = true,
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
