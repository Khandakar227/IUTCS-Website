import express from "express";
import { createContactMessage, getContactMessages } from "../../controller/Contact";
import validationErrorHandler from "../../libs/validations";
import { contactValidations } from "../../libs/validations/contact";

const contactRoutes = express.Router();

contactRoutes.post("/", ...contactValidations, validationErrorHandler, createContactMessage);
contactRoutes.get("/", getContactMessages);
export default contactRoutes;
