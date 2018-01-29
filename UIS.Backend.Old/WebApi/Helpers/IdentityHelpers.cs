using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;

namespace UniversityInformationSystem.WebApi.Helpers
{
    public static class IdentityHelpers
    {
        public static async Task<ClaimsIdentity> GenerateUserIdentityAsync(this IUser user, UserManager<IUser> manager, string authenticationType)
        {
            // Note the authenticationType must match the one defined in CookieAuthenticationOptions.AuthenticationType
            var userIdentity = await manager.CreateIdentityAsync(user, authenticationType);
            // Add custom user claims here
            return userIdentity;
        }
    }
}