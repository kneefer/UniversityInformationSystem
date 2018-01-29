using JetBrains.Annotations;
using MongoDB.AspNet.Identity;

namespace UniversityInformationSystem.MongoDbDAL.Identity
{
    [UsedImplicitly]
    internal class MongoApplicationUser : IdentityUser
    {
        public MongoApplicationUser()
        {
            
        }

        public MongoApplicationUser(string userName)
            :base(userName)
        {
            
        }
    }
}
