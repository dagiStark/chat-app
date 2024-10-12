import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import userRouter from "./routes/userRouter.js";
import connectToDb from "./db/connect.js";
import cors from "cors";

import { app, server } from "./socket/socket.js";

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "https://chat-app-client-chi-ashen.vercel.app",
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
    credentials: true,
  })
);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRouter);
app.use("/", (req, res) => {
  res.send("Hello");
});

// Start server
server.listen(PORT, () => {
  connectToDb();
  console.log(`Server is running on port ${PORT}`);
});
