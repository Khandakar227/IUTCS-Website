import { Schema, model } from "mongoose";

const eventModel = new Schema({
    name: {type: String, required: true },
    description: {type: String },
    event_start_date: { type: Date },
    event_end_date: { type: Date },
    registration_open: { type: Boolean, default: true },
    max_team_members: { type: Number, required: true },
    registration_fee: { type: String, default: "N/A", required: true },
    created_at: { type: Date, default: Date.now, required: true },
});

const Event = model("Events", eventModel);

export default Event;