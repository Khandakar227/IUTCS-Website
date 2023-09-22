import { Request, Response } from "express";
import Event from "../model/Event";

export const addEvent = async (req:Request, res:Response) => {
    try {
        const {name, event_date, registration_open} = req.body;
        const competition = await Event.create({name, event_date, registration_open});
        res.status(200).json({ error: false, message: "Event added", competition });
    } catch (error) {
        const err = error as Error;
        console.log(err.message);
        res.status(500).json({error: false, message: `Error occured on the server: ${err.message}`})
    }
}
