using Microsoft.AspNet.Identity;

namespace UniversityInformationSystem.DALInterfaces.Identity
{
    public interface IApplicationUserFactory
    {
        IUser GetApplicationUser(string userName);
    }
}
