import { ObjectId } from "mongodb";
import { Schema, model } from "mongoose";

const participantSchema = new Schema({
    name: { type: String, required: true },
    phone_number: { type: String, required: true },
    email: { type: String, required: true },
    institution: { type: String, required: true }
});

const registrationModel = new Schema({
    team_name: { type: String, required: true,  unique: true },
    team_members: [{ type: participantSchema, required: true }],
    email: { type: String, required: true, unique: true },
    status: { type: String, default: 'pending', required: true },
    verified: { type: Boolean, default: false, required: true },
    event: {type: ObjectId, ref: "Events"},
    created_at: { type: Date, default: Date.now, required: true },
})

const Registration = model("Registrations", registrationModel);

export default Registration;
