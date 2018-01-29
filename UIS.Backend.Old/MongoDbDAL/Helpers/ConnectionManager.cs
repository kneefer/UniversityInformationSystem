
using System;
using MongoDB.Driver;
using System.Configuration;

namespace UniversityInformationSystem.MongoDbDAL.Helpers
{
    internal class ConnectionManager
    {
		internal static MongoDatabase GetDbConnection(string connectionUrl, string dbName)
		{
			var mongoClient = new MongoClient(connectionUrl);
			var mongoDatabase = mongoClient.GetServer().GetDatabase(dbName);
			return mongoDatabase;
		}
	}
}