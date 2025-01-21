import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import http from "http";
import express from "express";
import cors from "cors";

import { resolvers, typeDefs } from "../src/schema.js"

const app = express();
app.use(cors());
app.use(express.json());
const httpServer = http.createServer(app);

const startApolloServer = async(app, httpServer) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    cache: "bounded",
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();
  server.applyMiddleware({ app });
}

startApolloServer(app, httpServer);

export default httpServer;