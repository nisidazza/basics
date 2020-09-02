import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/', (req, res) => {
	res.send('GraphQL is amazing!');
});

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
