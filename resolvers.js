//use this class to initialize a new friend in our database
class Friend {
	constructor(id, { firstName, lastName, age, gender, language, email }) {
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.gender = gender;
		this.language = language;
		this.email = email;
	}
}

//initialize our database as an empty object
const friendDatabase = {};

//resolver for GraphQL
//it needs to match the type in schema
const resolvers = {
	getFriend: ({ id }) => {
		return new Friend(id, friendDatabase[id]);
	},
	createFriend: ({ input }) => {
		let id = require('crypto').randomBytes(10).toString('hex');
		//assign a position in the DB
		friendDatabase[id] = input;
		return new Friend(id, input);
	},
};

export default resolvers;
