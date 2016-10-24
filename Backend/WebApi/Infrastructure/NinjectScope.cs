using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http.Dependencies;
using Ninject.Parameters;
using Ninject.Syntax;

namespace UniversityInformationSystem.WebApi.Infrastructure
{
    /// <summary>
    /// Scope for range of dependencies.
    /// </summary>
    public class NinjectScope : IDependencyScope
    {
        private IResolutionRoot _resolutionRoot;

        public NinjectScope(IResolutionRoot kernel)
        {
            _resolutionRoot = kernel;
        }

        public object GetService(Type serviceType)
        {
            var request = _resolutionRoot.CreateRequest(serviceType, null, new Parameter[0], true, true);
            return _resolutionRoot.Resolve(request).SingleOrDefault();
        }

        public IEnumerable<object> GetServices(Type serviceType)
        {
            var request = _resolutionRoot.CreateRequest(serviceType, null, new Parameter[0], true, true);
            return _resolutionRoot.Resolve(request).ToList();
        }

        public void Dispose()
        {
            var disposable = (IDisposable)_resolutionRoot;
            disposable?.Dispose();
            _resolutionRoot = null;
        }
    }
}