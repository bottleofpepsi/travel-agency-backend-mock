import http from "http";
import express from "express";
import cors from "cors";

import path from "path";
import { fileURLToPath } from 'url';
import { startApolloServer } from "../src/apollo-server.js";

import "dotenv/config";


const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static( path.join(__dirname, "..", 'public')));

app.get("/", (req, res) => {
    res.sendFile("public/index.html")
})

const httpServer = http.createServer(app);
await startApolloServer(app, httpServer);
httpServer.listen(PORT, () => console.log(`Server started.\nListening on port ${PORT}.`))
