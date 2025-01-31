import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { resolvers, typeDefs } from "./schema.js"

export const startApolloServer = async(app, httpServer) => {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        cache: "bounded",
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });
  
    await server.start();
    server.applyMiddleware({ app });
}