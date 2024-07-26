import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js";
import connectToDb from "./db/connect.js";

const app = express();
const PORT = process.env.PORT || 5000;


dotenv.config();

app.use(express.json());

app.use("/api/auth", authRoutes);

// app.get("/", (req, res) => {
//   res.send("hello");
// }); 


app.listen(PORT, () => {
  connectToDb();
  console.log(`Server is running on port ${PORT}`);
});
