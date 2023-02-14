export const hello = async (_: unknown, { input }: { input: { hello: string } }): Promise<unknown> => {
  return input;
};
