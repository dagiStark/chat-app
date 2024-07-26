import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const protectRoute = async (req, res) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({ Error: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(401).json({ Error: "user not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(500).json({ Error: "Error while authenticating user" });
  }
};

export default protectRoute;
