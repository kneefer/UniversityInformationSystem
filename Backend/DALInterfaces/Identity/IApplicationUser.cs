using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;

namespace UniversityInformationSystem.DALInterfaces.Identity
{
    public interface IApplicationUser : IUser
    {
        Task<ClaimsIdentity> GenerateUserIdentityAsync(UserManager<IApplicationUser> manager, string authenticationType);
    }
}
