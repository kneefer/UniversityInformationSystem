using MongoDB.Bson.Serialization.Attributes;

namespace UniversityInformationSystem.MongoDbDAL.Models
{
    internal class Token
    {
        [BsonElement("name")]
        public string Name { get; set; }

        [BsonElement("defaultValue")]
        public string DefaultValue { get; set; }

        [BsonElement("value")]
        public string Value { get; set; }
    }
}
