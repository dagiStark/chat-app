import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import connectToDb from "./db/connect.js";
import cookieParser from "cookie-parser";

const app = express();
const PORT = process.env.PORT || 5000;


dotenv.config();

app.use(express.json());
app.use(cookieParser())

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);




app.listen(PORT, () => {
  connectToDb();
  console.log(`Server is running on port ${PORT}`);
});
