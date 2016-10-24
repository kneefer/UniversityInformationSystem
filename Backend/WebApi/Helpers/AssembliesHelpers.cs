using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;

namespace UniversityInformationSystem.WebApi.Helpers
{
    public static class AssembliesHelpers
    {
        private static readonly string[] DirNames =
        {
            Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "bin"),
        };

        public static Dictionary<string, string> GetKnownAssemblies()
        {
            var toReturn = new Dictionary<string, string>();

            foreach (var enumerateFile in DirNames.SelectMany(x => Directory.GetFiles(x, "*.dll", SearchOption.AllDirectories)))
            {
                try
                {
                    toReturn.Add(AssemblyName.GetAssemblyName(enumerateFile).FullName, Path.GetFullPath(enumerateFile));
                }
                catch { /* ignore native files */ }
            }

            return toReturn;
        }

        public static Assembly Resolve(IReadOnlyDictionary<string, string> knownAssemblies, object s, ResolveEventArgs e)
        {
            var requiredAssembly = new AssemblyName(e.Name);
            var assembly =
                AppDomain.CurrentDomain
                    .GetAssemblies()
                    .FirstOrDefault(x => new AssemblyName(x.FullName).Name == requiredAssembly.Name);

            if (assembly != null) return assembly;


            return knownAssemblies.ContainsKey(e.Name) ? Assembly.LoadFile(knownAssemblies[e.Name]) : null;
        }
    }
}