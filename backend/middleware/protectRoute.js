import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token || token.length === 0) {
      return res.status(401).json({ Error: "No token provided" });
    }

    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      // If the token is expired or invalid
      return res.status(401).json({ Error: "Invalid or expired token" });
    }

    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(401).json({ Error: "User not found" });
    }

    req.user = user;
    next(); // Proceed to next middleware or route handler
  } catch (error) {
    console.error(error);
    res.status(500).json({ Error: "Error while authenticating user" });
  }
};

export default protectRoute;
