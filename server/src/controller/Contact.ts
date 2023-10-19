import { Request, Response } from "express";
import axios from 'axios';
import Contact from "../model/Contact";

export const createContactMessage = async (req: Request, res: Response) => {
    try {
        const { name, email, message } = req.body;
        const { captcha_token } = req.query;
        const captchaResponse = await axios.get(
         `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captcha_token}`
         );
        // Check if captcha is correct
         if (!captchaResponse || !captchaResponse.data || !captchaResponse.data.success)
            return res.status(401).json({ error: true, message: 'Invalid Captcha' });
        // save to contact
        const contact = await Contact.create({
            name,email,message
        });
        contact.save();

        res.status(200).json({error: false, message: "Your message has been sent"});
        
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

export const getContactMessages = async (req: Request, res: Response) => {
    try {
        const {} = req.query;
        const contacts = await Contact.find({});
        res.status(200).json({error: false, contacts});
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