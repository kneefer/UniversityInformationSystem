using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using MongoDB.AspNet.Identity;

namespace UniversityInformationSystem.MongoDbDAL.Identity
{
    internal class MongoUserStoreWrapper : 
        IUserLoginStore<IUser>, 
        IUserClaimStore<IUser>, 
        IUserRoleStore<IUser>, 
        IUserPasswordStore<IUser>, 
        IUserSecurityStampStore<IUser>, 
        IUserStore<IUser>
    {
        private readonly UserStore<MongoApplicationUser> _userStore;

        public MongoUserStoreWrapper(string connectionString)
        {
            _userStore = new UserStore<MongoApplicationUser>(connectionString);
        }

        public Task CreateAsync(IUser user)
        {
            return _userStore.CreateAsync((MongoApplicationUser)user);
        }

        public Task UpdateAsync(IUser user)
        {
            return _userStore.UpdateAsync((MongoApplicationUser)user);
        }

        public Task DeleteAsync(IUser user)
        {
            return _userStore.DeleteAsync((MongoApplicationUser)user);
        }

        public Task<IUser> FindByIdAsync(string userId)
        {
            return _userStore.FindByIdAsync(userId).ContinueWith(x => (IUser)x.Result);
        }

        public Task<IUser> FindByNameAsync(string userName)
        {
            return _userStore.FindByNameAsync(userName).ContinueWith(x => (IUser)x.Result);
        }

        public void Dispose()
        {
            _userStore.Dispose();
        }

        public Task AddLoginAsync(IUser user, UserLoginInfo login)
        {
            return _userStore.AddLoginAsync((MongoApplicationUser) user, login);
        }

        public Task RemoveLoginAsync(IUser user, UserLoginInfo login)
        {
            return _userStore.RemoveLoginAsync((MongoApplicationUser)user, login);
        }

        public Task<IList<UserLoginInfo>> GetLoginsAsync(IUser user)
        {
            return _userStore.GetLoginsAsync((MongoApplicationUser) user);
        }

        public Task<IUser> FindAsync(UserLoginInfo login)
        {
            return _userStore.FindAsync(login).ContinueWith(x => (IUser)x.Result);
        }

        public Task<IList<Claim>> GetClaimsAsync(IUser user)
        {
            return _userStore.GetClaimsAsync((MongoApplicationUser) user);
        }

        public Task AddClaimAsync(IUser user, Claim claim)
        {
            return _userStore.AddClaimAsync((MongoApplicationUser) user, claim);
        }

        public Task RemoveClaimAsync(IUser user, Claim claim)
        {
            return _userStore.RemoveClaimAsync((MongoApplicationUser)user, claim);
        }

        public Task AddToRoleAsync(IUser user, string roleName)
        {
            return _userStore.AddToRoleAsync((MongoApplicationUser) user, roleName);
        }

        public Task RemoveFromRoleAsync(IUser user, string roleName)
        {
            return _userStore.RemoveFromRoleAsync((MongoApplicationUser)user, roleName);
        }

        public Task<IList<string>> GetRolesAsync(IUser user)
        {
            return _userStore.GetRolesAsync((MongoApplicationUser) user);
        }

        public Task<bool> IsInRoleAsync(IUser user, string roleName)
        {
            return _userStore.IsInRoleAsync((MongoApplicationUser) user, roleName);
        }

        public Task SetPasswordHashAsync(IUser user, string passwordHash)
        {
            return _userStore.SetPasswordHashAsync((MongoApplicationUser) user, passwordHash);
        }

        public Task<string> GetPasswordHashAsync(IUser user)
        {
            return _userStore.GetPasswordHashAsync((MongoApplicationUser)user);
        }

        public Task<bool> HasPasswordAsync(IUser user)
        {
            return _userStore.HasPasswordAsync((MongoApplicationUser) user);
        }

        public Task SetSecurityStampAsync(IUser user, string stamp)
        {
            return _userStore.SetSecurityStampAsync((MongoApplicationUser) user, stamp);
        }

        public Task<string> GetSecurityStampAsync(IUser user)
        {
            return _userStore.GetSecurityStampAsync((MongoApplicationUser) user);
        }
    }
}
