var aspNetUsers = [
	{
		UserName: "kneefer@gmail.com",
		PasswordHash: "AFginoYj2n9BRvEqXgwdXJdRK4Gn9/PFjz6Ub1CSkP2Kdnhne2V5QkQgvKgVhBzXwQ==",
		SecurityStamp: "552c23e8-9b3d-44ce-a358-c81655748edb",
		Roles: ["admin"],
		Claims: [],
		Logins: []
	},
	{
		UserName: "mateusz.malota93@gmail.com",
		PasswordHash: "ALJSY96YAsrRNO9ay0yQ0gMzExYaFgyhchHc8z558/gCncuhz3h5OkxiSeemW9UUog==",
		SecurityStamp: "b6c6c0a2-6e88-4ffa-92cc-5dfd457f8337",
		Roles: ["admin"],
		Claims: [],
		Logins: []
	},
	{
		UserName: "michal.mackowski@polsl.pl",
		PasswordHash: "ALJSY96YAsrRNO9ay0yQ0gMzExYaFgyhchHc8z558/gCncuhz3h5OkxiSeemW9UUog==",
		SecurityStamp: "b6c6c0a2-6e88-4ffa-92cc-5dfd457f8337",
		Roles: ["admin"],
		Claims: [],
		Logins: []
	}
];

var users = [
	{
		firstName: "Szymon",
		lastName: "Bartnik",
		userName: "kneefer",
		email: "kneefer@gmail.com",
		description: "Some user 1 description",
		allowedTablets: [],
		templates: []
	},
	{
		firstName: "Mateusz",
		lastName: "Malota",
		userName: "marven",
		email: "mateusz.malota93@gmail.com",
		description: "Some user 2 description",
		allowedTablets: [],
		templates: []
	},
	{
		firstName: "Michal",
		lastName: "Mackowski",
		userName: "mmackowski",
		email: "michal.mackowski@polsl.pl",
		description: "Some user 3 description",
		allowedTablets: [],
		templates: []
	}
];

var previews = [];
var tablets = [];

// Remove old
db.getCollection('AspNetUsers').drop();
db.getCollection('users').drop();
db.getCollection('previews').drop();
db.getCollection('tablets').drop();

// Add default AspNet users
db.createCollection('AspNetUsers');
db.getCollection('AspNetUsers').insert(aspNetUsers);

// Add default users
db.createCollection('users');
db.getCollection('users').insert(users);

// Add default previews
db.createCollection('previews');
db.getCollection('previews').insert(previews);

// Add default tablets
db.createCollection('tablets');
db.getCollection('tablets').insert(tablets);