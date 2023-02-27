import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client/core'
import { BatchHttpLink } from '@apollo/client/link/batch-http'
import { from } from '@apollo/client/link/core'
import { onError } from '@apollo/client/link/error'
import fetch from 'cross-fetch'
import merge from 'deepmerge'
import { useMemo } from 'react'

const batchHttpLink = new BatchHttpLink({
  batchInterval: 20,
  batchMax: 5,
  fetch,
  uri: process.env.NEXT_PUBLIC_GRAPHQL_URI,
})

const httpLink = new HttpLink({
  fetch,
  uri: process.env.NEXT_PUBLIC_GRAPHQL_URI,
})

const errorLink = onError(({ graphQLErrors, networkError, response, operation, forward }) => {
  if (graphQLErrors) {
    for (const { extensions } of graphQLErrors) {
      switch (extensions.code) {
        case '401': {
        }
      }
    }
  }
})

const createApolloClient = () => {
  if (process.env.NEXT_PUBLIC_APP_ENV === 'test')
    return new ApolloClient({
      cache: new InMemoryCache(),
      link: from([errorLink, httpLink]),
      ssrMode: typeof window === 'undefined',
    })

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: from([errorLink, batchHttpLink]),
    ssrMode: typeof window === 'undefined',
  })
}

type Apollo = ReturnType<typeof createApolloClient>

let apolloClient: Apollo

export const initializeApollo = (initialState = null): Apollo => {
  const _apolloClient = apolloClient ?? createApolloClient()

  if (initialState) {
    const existingCache = _apolloClient.extract()

    const data = merge(initialState, existingCache)

    _apolloClient.cache.restore(data)
  }

  if (typeof window === 'undefined') return _apolloClient

  if (apolloClient !== null) apolloClient = _apolloClient
  return _apolloClient
}

export const useApollo = (initialState: any): Apollo => {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}
