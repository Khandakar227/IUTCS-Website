import { Request, Response } from "express";
import Admin from "../model/Admin";
import { checkPasswordMatch, hashPassword } from "../libs/password";
import { sign } from "jsonwebtoken";

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const user = await Admin.findOne({ email });
        if (!user)
          return res.status(401).json({ message: "Incorrect email or password" });
          const isPasswordMatched = checkPasswordMatch(
            password,
            user.password as string
          );
        if (!isPasswordMatched)
            return res.status(401).json({ message: "Incorrect email or password" });
        
        user.signed_in = new Date();
        await user.save();
        
        const userInfo = {
            email: user.email,
            _id: user._id,
            name: user.name,
            role: user.role,
            verified: user.verified,
          };
      
        const token = sign(userInfo, process.env.JWT_SECRET as string, {
            expiresIn: 3_600_000 * 4,
        });
      
          res
            .status(200)
            .cookie("access_token", token, { maxAge: 3_600_000 * 4, httpOnly: true })
            .json({
                error: false,
                message: "logged in",
                user: { ...userInfo, expiresIn: 3_600_000 * 4 },
              });
    } catch (error) {
        
    }
}

export const signUp = async (req: Request, res: Response) => {
    try {
        const {
            name, email, password
        } = req.body;
        
        const checkEmail = await Admin.findOne({ email });
        if (checkEmail)
            return res.status(400).json({ message: "Email is already in use" });

        const hash = hashPassword(password); //Hash the password
        const user = new Admin({
            email,
            password: hash,
            name,
            role: "admin"
        });
        await user.save();
        //
        // Verification mail should be send
        //
        res.status(201).json({
            error: false,
            message:
              "Account successfully created!.",
          });
        
    } catch (error) {
        const err = error as Error;
        console.log(error);
        res.status(500).json({ error: true, message: `Something went wrong. ${err.message}` });
    }
}