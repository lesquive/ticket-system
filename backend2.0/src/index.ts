import { ApolloServer } from "@apollo/server";
import { resolvers, typeDefs } from "./schema.js";
import { startStandaloneServer } from "@apollo/server/standalone";

const port = 4000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port },
});

console.log(`🚀  Server ready at: ${url}`);
