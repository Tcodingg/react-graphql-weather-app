import React from 'react';
import Home from './components/Home';
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	HttpLink,
} from '@apollo/client';

export default function App() {
	const client = new ApolloClient({
		cache: new InMemoryCache(),
		uri: 'https://graphql-weather-api.herokuapp.com/',
	});
	return (
		<ApolloProvider client={client}>
			<Home />
		</ApolloProvider>
	);
}
