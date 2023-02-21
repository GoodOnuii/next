import { GraphQLError } from "graphql";

export const createHello = async (
  _: unknown,
  { input }: { input: { hello: String } }
): Promise<any> => {
  try {
    if (false)
      throw new GraphQLError("", {
        extensions: { code: "UNAUTHENTICATED" },
      });

    return input;
  } catch (err) {
    console.error(err);
  }
};
