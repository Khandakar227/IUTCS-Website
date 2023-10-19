import { Schema, model } from "mongoose";

const contactModel = new Schema({
    name: {type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    created_at: { type: Date, default: Date.now, required: true },
});

const Contact = model("Contacts", contactModel);

export default Contact;