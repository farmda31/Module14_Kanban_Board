import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface JwtPayload {
  username: string;
}

// Replace 'your_secret_key' with the actual secret key from your .env file
const JWT_SECRET =
  process.env.JWT_SECRET ||
  'update_with_your_secret_key';

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  // TODO: verify the token exists and add the user data to the request object
  // Receive the token from the Authorization header
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Bearer <token>

  if (!token) {
    res.sendStatus(401); // Unauthorized if no token is found
    return;
  }

  // Verify the token
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      res.sendStatus(403); // Forbidden if token is invalid
      return;
    }

    // Add the user data to the request object
    // Check if decoded is of type JwtPayload
    if (decoded) {
      req.user = decoded as JwtPayload; // You may need to cast req.user to the appropriate type
      next(); // Proceed to the next middleware or route handler
    } else {
      res.sendStatus(403); // Forbidden if decoded is undefined
    }
  });
};
