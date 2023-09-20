import { Schema, model } from "mongoose";

const participantModel = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone_number: { type: String, required: true, unique: true },
    university: { type: String, required: true },
    created_at: { type: Date, default: Date.now, required: true },
})

const Participant = model("Participants", participantModel);

export default Participant;
