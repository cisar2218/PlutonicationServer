import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });

io.on("connection", (socket) => {
  console.log("connected to client!");
  console.log(socket.id);
});

const PORT = 3000;
httpServer.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});