import { NextFunction, Request, Response } from "express";
import dotenv from 'dotenv'
import { verify } from "jsonwebtoken";

dotenv.config()
export const verifyAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = verify(
      req.cookies["access_token"],
      process.env.JWT_SECRET as string
    );
    // Verify cookie for admin
    if (token && typeof token !== "string" && token.role === "admin") {
        res.locals.user = token;
        next();
    } else return res.status(403).json({ message: "You are not authorized" });

  } catch (err) {
    const error = err as Error;
    console.log(error.message);
    res.status(500).json({ error: true, message: `Failed to get registrations. ${error.message}` });
  }
};


