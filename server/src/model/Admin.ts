import { ObjectId } from "mongodb";
import { Schema, model } from "mongoose";

// For now this will be used for Admin
const userModel = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    verified: { type: Boolean, default: false, required: true },
    created_at: { type: Date, default: Date.now, required: true },
    role: { type: String, required: true },
    signed_in: { type: Date, default: Date.now, required: true },
})

const Admin = model("Admins", userModel);

export default Admin;
