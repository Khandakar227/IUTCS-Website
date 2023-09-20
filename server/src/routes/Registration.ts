import express from "express";
import { createRegistration, getRegistration, verifyEmail } from "../controller/Registration";
import { registrationValidations } from "../libs/validations/registration";

const registrationRoutes = express.Router();

registrationRoutes.get("/", getRegistration);
registrationRoutes.get("/verify/:id", verifyEmail);
registrationRoutes.post("/", ...registrationValidations, createRegistration);

export default registrationRoutes;