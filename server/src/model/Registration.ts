import { Schema, model } from "mongoose";

const registrationModel = new Schema({
    team_name: { type: String, required: true,  unique: true },
    team_members: [{ type: String, required: true }],
    email: { type: String, required: true, unique: true },
    phone_number: { type: String, required: true },
    university: { type: String, required: true },
    status: { type: String, default: 'pending', required: true },
    verified: { type: Boolean, default: false, required: true },
    created_at: { type: Date, default: Date.now, required: true },
})

const Registration = model("Registration", registrationModel);

export default Registration;
