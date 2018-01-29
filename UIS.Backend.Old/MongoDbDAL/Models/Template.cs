using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace UniversityInformationSystem.MongoDbDAL.Models
{
    internal class Template
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("name")]
        public string Name { get; set; }

        [BsonElement("description")]
        public string Description { get; set; }

        [BsonElement("htmlContent")]
        public string HtmlContent { get; set; }

        [BsonElement("tokens")]
        public List<Token> Tokens { get; set; }
    }
}
