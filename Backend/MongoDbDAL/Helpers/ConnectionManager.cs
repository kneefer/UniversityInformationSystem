
using MongoDB.Driver;

namespace UniversityInformationSystem.MongoDbDAL.Helpers
{
    internal class ConnectionManager
    {
        private static ConnectionManager _instance;

        public MongoDatabase Database { get; }

        private ConnectionManager()
        {
            var client = new MongoClient();
            Database = client.GetServer().GetDatabase("UISDB");
        }

        public static ConnectionManager Instance
        {
            get
            {
                if (_instance != null)
                    return _instance;

                _instance = new ConnectionManager();
                return _instance;
            }
        }
    }
}