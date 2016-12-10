using System;
using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace UniversityInformationSystem.MongoDbDAL.Models
{
    internal class Entry
    {
        [BsonElement("date")]
        [BsonRepresentation(BsonType.DateTime)]
        public DateTime Date { get; set; }

        [BsonElement("htmlContent")]
        public string HtmlContent { get; set; }

        [BsonElement("tokens")]
        public List<Token> Tokens { get; set; }
    }
}
