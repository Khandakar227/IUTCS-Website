import express from "express";
import { createEvent, deleteEvent, getAllEvents, getEvent, updateEvent } from "../../controller/Event";
import { createEventValidations } from "../../libs/validations/event";
import validationErrorHandler from "../../libs/validations";

const eventRoutes = express.Router();

eventRoutes.get("/", getAllEvents);
eventRoutes.get("/:eventId", getEvent);
eventRoutes.post("/", ...createEventValidations, validationErrorHandler, createEvent);
eventRoutes.put("/:eventId", updateEvent);
eventRoutes.delete("/:eventId", deleteEvent);

export default eventRoutes;
