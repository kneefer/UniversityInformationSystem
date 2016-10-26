using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin;

namespace UniversityInformationSystem.DALInterfaces.Identity
{
    public interface IApplicationUserManagerFactory
    {
        ApplicationUserManager CreateApplicationUserManager(IdentityFactoryOptions<IApplicationUserManager> options, IOwinContext context);
    }

    public interface IApplicationUserFactory
    {
        IApplicationUser GetApplicationUser(string userName);
    }
}
