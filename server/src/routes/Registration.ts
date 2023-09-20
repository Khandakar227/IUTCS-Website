import express from "express";
import { createRegistration, getRegistration, verifyEmail, sendVerifyEmail } from "../controller/Registration";
import { registrationValidations } from "../libs/validations/registration";
import validationErrorHandler from "../libs/validations";

const registrationRoutes = express.Router();

registrationRoutes.get("/", getRegistration);
registrationRoutes.get("/verify/:id", verifyEmail);
registrationRoutes.get("/send-verification-link/:email", sendVerifyEmail);
registrationRoutes.post("/", ...registrationValidations, validationErrorHandler, createRegistration);

export default registrationRoutes;