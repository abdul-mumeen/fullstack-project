import express from 'express';
import graphqlHTTP from 'express-graphql';
import { makeExecutableSchema } from 'graphql-tools';

const app: express.Application = express();
const port = 5000;

let typeDefs: any = [
	`
  type Query {
    hello: String
  }
`
];

let helloMessage: String = 'World!';

let resolvers = {
	Query: {
		hello: () => helloMessage
	}
};

app.use(
	'/graphql',
	graphqlHTTP({
		schema: makeExecutableSchema({ typeDefs, resolvers }),
		graphiql: true
	})
);
app.listen(port, () =>
	console.log(`A simple Node Graphql API listening port ${port}!`)
);
