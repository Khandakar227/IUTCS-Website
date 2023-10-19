import express from "express";
import { createEvent, deleteEvent, getAllEvents, getEvent, updateEvent } from "../../controller/Event";
import { createEventValidations } from "../../libs/validations/event";
import validationErrorHandler from "../../libs/validations";
import { verifyAdmin } from "../../libs/admin/verifyAdmin";

const eventRoutes = express.Router();

eventRoutes.get("/", getAllEvents);
eventRoutes.get("/:eventId", getEvent);
eventRoutes.post("/", ...createEventValidations, validationErrorHandler, verifyAdmin, createEvent);
eventRoutes.put("/:eventId", verifyAdmin, updateEvent);
eventRoutes.delete("/:eventId", verifyAdmin, deleteEvent);

export default eventRoutes;
