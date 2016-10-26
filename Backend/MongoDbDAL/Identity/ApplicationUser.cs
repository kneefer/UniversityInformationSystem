using System.Security.Claims;
using System.Threading.Tasks;
using JetBrains.Annotations;
using Microsoft.AspNet.Identity;
using MongoDB.AspNet.Identity;
using UniversityInformationSystem.DALInterfaces.Identity;

namespace UniversityInformationSystem.MongoDbDAL.Identity
{
    // You can add profile data for the user by adding more properties to your ApplicationUser class, please visit http://go.microsoft.com/fwlink/?LinkID=317594 to learn more.
    [UsedImplicitly]
    internal sealed class ApplicationUser : IdentityUser, IApplicationUser
    {
        public ApplicationUser()
        {
            
        }

        public ApplicationUser(string userName)
        {
            UserName = userName;
        }

        public async Task<ClaimsIdentity> GenerateUserIdentityAsync(UserManager<IApplicationUser> manager, string authenticationType)
        {
            // Note the authenticationType must match the one defined in CookieAuthenticationOptions.AuthenticationType
            var userIdentity = await manager.CreateIdentityAsync(this, authenticationType);
            // Add custom user claims here
            return userIdentity;
        }
    }
}