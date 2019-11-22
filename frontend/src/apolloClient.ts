import ApolloClient, { ApolloClientOptions } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const apolloOptons: ApolloClientOptions<any> = {
	cache: new InMemoryCache() as any,
	link: new HttpLink({
		uri: 'http://localhost:5000/graphql'
	}),
	connectToDevTools: true
};

const client = new ApolloClient(apolloOptons);

export default client;
