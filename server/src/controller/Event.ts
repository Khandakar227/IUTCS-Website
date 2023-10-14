import { Request, Response } from "express";
import Event from "../model/Event";


export const createEvent = async (req: Request, res: Response) => {
    try {
        const {
            name, description, event_start_date, event_end_date, registration_open, max_team_members
        } = req.body;
        const event = await Event.create({
            name, description, event_start_date, event_end_date, registration_open, max_team_members
        });
        event.save();
        res.status(200).json({error: false, message: "Event created", event});
    } catch (err) {
        const error = err as Error;
        console.log(error.message);
        res
        .status(500)
        .json({
            error: true,
            message: `Failed to create a new event. ${error.message}`,
        });
    }
}


export const getAllEvents = async (req: Request, res: Response) => {
    try {
        const events = await Event.find();
        res.status(200).json({error: false, events});
    } catch (err) {
        const error = err as Error;
        console.log(error.message);
        res
        .status(500)
        .json({
            error: true,
            message: `Error occured on the server. ${error.message}`,
        });
    }
}

export const getEvent = async (req: Request, res: Response) => {
    try {
        const { eventId } = req.params;
        const eventInfo = await Event.findById(eventId);
        res.status(200).json({error: false, event: eventInfo});
    } catch (err) {
        const error = err as Error;
        console.log(error.message);
        res
        .status(500)
        .json({
            error: true,
            message: `Error occured on the server. ${error.message}`,
        });
    }
}


export const deleteEvent = async (req: Request, res: Response) => {
    try {
        const { event_id } = req.params;
        await Event.findByIdAndDelete(event_id);
        res.status(200).json({error: false, message: "Event deleted."});
    } catch (err) {
        const error = err as Error;
        console.log(error.message);
        res
        .status(500)
        .json({
            error: true,
            message: `Failed to delete event. ${error.message}`,
        });
    }
}

export const updateEvent = async (req: Request, res: Response) => {
    try {
        // const { event_id } = req.params;
        // const { name, event_date, registration_open, max_team_members } = req.body;
        // await Event.findByIdAndUpdate(event_id, {

        // });
        res.status(200).json({error: false, message: "Event deleted."});
    } catch (err) {
        const error = err as Error;
        console.log(error.message);
        res
        .status(500)
        .json({
            error: true,
            message: `Failed to update event. ${error.message}`,
        });
    }
}