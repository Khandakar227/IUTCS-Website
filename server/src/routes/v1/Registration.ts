import express from "express";
import { createRegistration, getRegistration, verifyEmail, sendVerifyEmail } from "../../controller/Registration";
import { registrationValidations } from "../../libs/validations/registration";
import validationErrorHandler from "../../libs/validations";
import { verifyUser } from "../../libs/user/verifyUser";

const registrationRoutes = express.Router();

registrationRoutes.get("/", getRegistration);
// registrationRoutes.get("/verify/:id", verifyEmail);
// registrationRoutes.get("/send-verification-link/:email", sendVerifyEmail);
registrationRoutes.post("/:event_id", ...registrationValidations, validationErrorHandler, verifyUser, createRegistration);

export default registrationRoutes;