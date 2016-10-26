using Microsoft.AspNet.Identity;

namespace UniversityInformationSystem.DALInterfaces.Identity
{
    public class ApplicationUserManager : UserManager<IApplicationUser>
    {
        public ApplicationUserManager(IUserStore<IApplicationUser> store) 
            : base(store)
        {
        }
    }
}
