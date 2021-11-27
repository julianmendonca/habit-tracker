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
	cache: new InMemoryCache({
		typePolicies: {
			Query: {
				fields: {}
			}
		},
		dataIdFromObject(responseObject: StoreObject) {
			const table = responseObject.__typename as string
			const defaultPk = defaultDataIdFromObject(responseObject)
			if (!table || table.includes('aggregate')) return defaultPk

			let finalPkName = ''
			let finalPkVal = ''
			finalPkName = `${table}_id`
			if (!(finalPkName in responseObject)) {
				if (!finalPkName.includes('s_id')) return defaultPk

				finalPkName = finalPkName.replace('s_id', '_id')
				if (!(finalPkName in responseObject)) return defaultPk
			}
			finalPkVal = responseObject[finalPkName] as string
			finalPkVal = `${table}:${finalPkVal}`

			// console.log({ [table]: finalPkVal })
			return finalPkVal
		}
	})
})

export default client
