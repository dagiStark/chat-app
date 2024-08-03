import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"],
  },
});

const userSocketMap = {};

io.on("connection", (socket) => {
  console.log("a new client connected", socket.id);

  const userId = socket.handshake.query.userId;
  if (userId !== "undefined") userSocketMap[userId] = socket.id;
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

console.log("Socket.io server initialized");

export { app, io, server };















// import { Server } from "socket.io";
// import http from "http";
// import express from "express";

// const app = express();

// const server = http.createServer(app);

// const io = new Server(server, {
//   cors: {
//     origin: ["http://localhost:3000"],
//   },
// });

// const userSocketMap = {};

// io.on("connection", (socket) => {
//   console.log("a new client connected", socket.id);

// //   const userId = socket.handshake.query.userId;
// //   if (userId != "undefined") userSocketMap[userId] = socket.id;

// //   io.emit("getOnlineUsers", Object.keys(userSocketMap));

// //   socket.on("disconnect", () => {
// //     console.log("user disconnected", socket.id);
// //     delete userSocketMap[userId];
// //     io.emit("getOnlineUsers", Object.keys(userSocketMap));
// //   });

// });

// console.log("socket io running...")

// export { app, io, server };
