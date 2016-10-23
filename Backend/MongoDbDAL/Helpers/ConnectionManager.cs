using MongoDB.Driver;

namespace UniversityInformationSystem.MongoDbDAL.Helpers
{
    internal class ConnectionManager
    {
        private static ConnectionManager _instance;

        public IMongoDatabase Database { get; }

        private ConnectionManager()
        {
            var client = new MongoClient();
            Database = client.GetDatabase("UISDB");
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