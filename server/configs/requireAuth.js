import jwt from 'jsonwebtoken';
import User from "../models/User.js" // Adjust the path based on your project structure
import dotenv from 'dotenv';
dotenv.config();
const requireAuth = async (req, res, next) => {
  const token = req.cookies.jwt; // Retrieve the JWT from cookies
  console.log("token inside req auth==========>",token)

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized, please log in' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify JWT
    const user = await User.findById(decoded.id).select('first_name email last_name'); // Fetch user details
    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    req.user = user; // Attach user data to the request object
    next(); // Proceed to the next middleware or controller
    
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

export default requireAuth;
