import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'

import resolvers from '@/graphql/api/resolvers'
import typeDefs from '@/graphql/api/typeDefs'

const server = new ApolloServer({
  typeDefs,
  resolvers,
  allowBatchedHttpRequests: true,
})

export default startServerAndCreateNextHandler(server, {})
