import http from "http";
import express from "express";
import cors from "cors";

import { startApolloServer } from "../src/apollo-server.js";

const app = express();
app.use(cors());
app.use(express.json());
const httpServer = http.createServer(app);

startApolloServer(app, httpServer);

export default httpServer;