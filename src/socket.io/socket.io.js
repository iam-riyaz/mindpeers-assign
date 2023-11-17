import { io } from "../utils/server";


io.on("connection", (socket) => {
    console.log("user connected");
  
    socket.on("join", (userData) => {
      console.log(`${userData.username} joined`);
      socket.join(userData.username);
    });
  
    socket.on("message outgoing", async (messageData) => {
      try {
        const { username, message } = messageData;
          //    console.log('working')
      //   // Save the message to MongoDB
      //   const chatMessage = new Chat({ username, message });
      //   await chatMessage.save();
          console.log({messageData})
        // Broadcast the message to the room
        socket.broadcast.emit("message incoming", messageData);
      } catch {}
    });
  
    socket.on("disconnect", () => {
      console.log("User disconnected");
    });
  });