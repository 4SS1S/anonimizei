import { ApolloClient, InMemoryCache } from '@apollo/client'

import { baseURL } from '.'

const client = new ApolloClient({
	uri: baseURL + '/graphql',
	cache: new InMemoryCache()
})

export default client
