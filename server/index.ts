import { ApolloServer, gql } from 'apollo-server';
import contributions from './contributions.json';

const port = 5000;

const typeDefs: any = gql`
	type Contribution {
		address: String
		currency: String
		value: Int
		txid: String
	}
	type Query {
		contributions(currency: String): [Contribution]
	}
`;

const resolvers = {
	Query: {
		contributions: () => {
			return contributions;
		}
	}
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(port, () =>
	console.log(`A simple Node Graphql API listening on port ${port}!`)
);
