import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/', (req, res) => {
	res.send('GraphQL is amazing!');
});

//use this class to initialize a new friend in our database
class Friend {
	constructor(id, { firstName, lastName, gender, language, email }) {
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.gender = gender;
		this.language = language;
		this.email = email;
	}
}

//initialize our database as an empty object
const friendDatabase = {};

//resolver for GraphQL
//it needs to match the type in schema
const root = {
	friend: () => {
		return {
			id: 28718992,
			firstName: 'Daisy',
			lastName: 'Flower',
			gender: 'female',
			language: 'english',
			email: 'daisy@flower.com',
		};
	},
	createFriend: ({ input }) => {
		let id = require('crypto').randomBytes(10).toString('hex');
		//assign a position in the DB
		friendDatabase[id] = input;
		return new Friend(id, input);
	},
};

//pass the query through the schema
//use graphiql to test what we do in the GraphQL server
app.use(
	'/graphql',
	graphqlHTTP({
		schema: schema,
		rootValue: root,
		graphiql: true,
	})
);

app.listen(8080, () =>
	console.log('Running server on port localhost:8080/graphql')
);
