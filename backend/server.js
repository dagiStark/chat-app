import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import userRouter from "./routes/userRouter.js";

import connectToDb from "./db/connect.js";
import cookieParser from "cookie-parser";

import { app, server } from "./socket/socket.js";
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRouter);

server.listen(PORT, () => {
  connectToDb();
  console.log(`Server is running on port ${PORT}`);
});
