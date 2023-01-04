import express from "express";
import { graphqlHTTP } from "express-graphql";
var { buildSchema } = require("graphql");

var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

var root = { hello: () => "Hello world!" };

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);
app.listen(4000);
console.log(`\
🚀 Server ready at: http://localhost:4000/graphql
`);
