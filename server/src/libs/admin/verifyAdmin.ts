import axios from "axios";
import { NextFunction, Request, Response } from "express";
import dotenv from 'dotenv'

dotenv.config()
export const verifyAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    console.log(process.env.FIREBASE_API_KEY);

    const data = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${process.env.FIREBASE_API_KEY}`, {
      idToken: token
    });
    // console.log(data.data);
    return res.status(200).json({data: data.data})
    const ADMIN_MAILS = process.env.ADMIN_MAILS?.split(' ');
    if (ADMIN_MAILS?.includes(token || "")) next();
    else {
      next()
      // res.status(403).json({error: true, message: "You don't have the necessary permission"});
    } 
  } catch (err) {
    const error = err as Error;
    console.log(error.message);
    res.status(500).json({ error: true, message: `Failed to get registrations. ${error.message}` });
  }
};

// const token = verify(
//   req.cookies["access_token"],
//   process.env.JWT_SECRET as string
// );
// // Verify cookie for admin
// if (token && typeof token !== "string" && token.role === "admin") {
//   res.locals.user = token;
//   next();
// } else return res.status(403).json({ message: "You are not authorized" });
