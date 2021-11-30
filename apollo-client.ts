import {
	ApolloClient,
	createHttpLink,
	defaultDataIdFromObject,
	InMemoryCache,
	split,
	StoreObject
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
	uri: 'https://habit-tracker.hasura.app/v1/graphql'
})

const authLink = setContext((_, { headers }) => {
	// get the authentication token from local storage if it exists
	const token = '3ibf3Klibkv03EMnlzSBYUODRtxjzgzEVJtxJpEnjux2pAB7tNbECTU4c0rZiZEU'
	// return the headers to the context so httpLink can read them
	return {
		headers: {
			...headers,
			'x-hasura-admin-secret': token ? `${token}` : ''
		}
	}
})

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache()
})

export default client
