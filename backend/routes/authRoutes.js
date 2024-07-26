import express from "express";
import { signup, login, logout } from "../controllers/authControllers.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("auth routes");
});


router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);



export default router;
