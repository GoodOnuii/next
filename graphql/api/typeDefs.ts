import { mergeTypeDefs } from "@graphql-tools/merge";
import { typeDefs as scalarTypeDefs } from "graphql-scalars";

import createHello from "./mutations/createHello/typeDef.graphql";
import hello from "./queries/hello/typeDef.graphql";

const mutationTypeDefs = [createHello];

const queryTypeDefs = [hello];

export default mergeTypeDefs([
  ...scalarTypeDefs,
  ...mutationTypeDefs,
  ...queryTypeDefs,
]);
