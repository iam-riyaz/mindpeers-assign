import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "../config/database/database.config.js";
import http from "http";
import exp from "constants";
import { Server } from "socket.io";
import { createUser, updateUser } from "../services/user.services.js";

export const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
app.use(express.static("./public"));

const server = http.createServer(app);

export const io = new Server(server);

// socket.io
io.on("connection", (socket) => {
  console.log("user connected");

  socket.on("join", (userData) => {
    console.log(`${userData.username} joined`);

   createUser(userData)
   

    socket.join(userData.username);
  });

  socket.on("message outgoing", async (messageData) => {
    try {
      const { username, message } = messageData;
      

    updateUser({username,message})

        
      // Broadcast the message to the room
      socket.broadcast.emit("message incoming", messageData);
    } catch {}
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});


const port = process.env.PORT || 4000;
connectDB().then(() => {
  server.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
});
