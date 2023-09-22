import { Schema, model } from "mongoose";

const eventModel = new Schema({
    name: {type: String, required: true },
    event_date: { type: Date },
    registration_open: { type: Boolean, default: true },
    created_at: { type: Date, default: Date.now, required: true },
});

const Event = model("Events", eventModel);

export default Event;
