import { Request, Response } from "express";
import Admin from "../model/Admin";
import { checkPasswordMatch, hashPassword } from "../libs/password";
import { sign } from "jsonwebtoken";


export const loginAsAdmin = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;
        const user = await Admin.findOne({ username });
        if (!user)
          return res.status(401).json({ message: "Incorrect username or password" });
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
            username: user.username,
            role: user.role,
            verified: user.verified,
          };
      
        const token = sign(userInfo, process.env.JWT_SECRET as string, {
            expiresIn: 3_600_000 * 4,
        });
        console.log(token);
          res
            .status(200)
            .cookie("access_token", token, { maxAge: 3_600_000 * 4, httpOnly: true, sameSite: 'none' })
            .json({
                error: false,
                message: "logged in",
                user: { ...userInfo, expiresIn: 3_600_000 * 4 },
              });
    } catch (error) {
        const err = error as Error;
        console.log(error);
        res.status(500).json({ error: true, message: `Something went wrong. ${err.message}` });
    }
}

export const signUpAsAdmin = async (req: Request, res: Response) => {
    try {
        const {
            username, email, password
        } = req.body;
        
        const checkEmail = await Admin.findOne({ email });
        if (checkEmail)
            return res.status(400).json({ message: "Email is already in use" });

        const hash = hashPassword(password); //Hash the password
        const user = new Admin({
            email,
            password: hash,
            username,
            role: "admin"
        });
        await user.save();
 
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


export const getAdmin = async (req: Request, res: Response) => {
    try {
        const admin = res.locals.user;
        if (!admin.email || admin.role != 'admin')
            return res.status(403).json({error: true, message: "Unauthorized"});
      
        const adminDetails = await Admin.findOne({email: admin.email, username: admin.username});
        if(!adminDetails)
            return res.clearCookie('access_token')
                      .status(401).json({error: true, message: "The Admin account is deleted or doesn't exist"});
      
        return res.status(200).json({ error: false, admin: adminDetails });

    } catch (error) {
        const err = error as Error;
        console.log(err.message);
        res
        .status(500)
        .json({
            error: true,
            message: `Unexpected error occured on the server. ${err.message}`,
        });
    }
}