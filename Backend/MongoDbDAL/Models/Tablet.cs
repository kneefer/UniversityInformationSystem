using JetBrains.Annotations;
using MongoDB.Bson.Serialization.Attributes;

namespace UniversityInformationSystem.MongoDbDAL.Models
{
    [UsedImplicitly]
    internal class Tablet
    {
        public string Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }
    }
}
