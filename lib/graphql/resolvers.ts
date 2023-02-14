import { resolvers as scalarResolvers } from 'graphql-scalars';

import { createHello } from './mutations/createHello';
import { hello } from './queries/hello';

const resolvers = {
  ...scalarResolvers,
  Mutation: {
    createHello,
  },
  Query: {
    hello,
  },
};

export default resolvers;
