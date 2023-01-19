import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'

import resolvers from '@/lib/graphql/resolvers'
import typeDefs from '@/lib/graphql/typeDefs'

const server = new ApolloServer({
  typeDefs,
  resolvers,
  allowBatchedHttpRequests: true,
})

export default startServerAndCreateNextHandler(server, {})
