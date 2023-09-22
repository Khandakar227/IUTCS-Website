import express from "express";
import { addEvent } from "../../controller/Event";

const eventRoutes = express.Router();

eventRoutes.post("/", addEvent);
export default eventRoutes;