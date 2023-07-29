// import { createServer } from "@graphql-yoga/node";
import { createServer } from "node:http";
import { createSchema, createYoga } from "@graphql-yoga/node";
import { schema } from "./schema";

const port = Number(process.env.API_PORT) || 4000;

const yoga = createYoga({
  schema: createSchema({
    typeDefs: schema,
  }),
});
const server = createServer(yoga);

// server.start().then(()=>{
//     console.log(`graphql server is ready at http://localhost:${port}/graphql`);
// })

server.listen(port, () => {
  console.log(`graphql server is ready at http://localhost:${port}/graphql`);
});
