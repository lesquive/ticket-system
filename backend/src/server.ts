import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schema";
import { root } from "./root";
import cors from "cors";

const app = express();

const allowedOrigins = ["http://localhost:3000"];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

app.use(cors(options));

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
