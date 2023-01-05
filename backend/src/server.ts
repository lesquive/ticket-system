import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schema";
import { root } from "./root";

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
app.listen(4000);
console.log(`\
🚀 Server ready at: http://localhost:4000/graphql
`);
