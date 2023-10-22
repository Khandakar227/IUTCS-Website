import express from "express";
import { createRegistration, getRegistration, verifyEmail, sendVerifyEmail, getRegCountByEvent, getRegistrationByEvent } from "../../controller/Registration";
import { registrationValidations } from "../../libs/validations/registration";
import validationErrorHandler from "../../libs/validations";
import { verifyUser } from "../../libs/user/verifyUser";
import { verifyAdmin } from "../../libs/admin/verifyAdmin";

const registrationRoutes = express.Router();

registrationRoutes.get("/", verifyAdmin, getRegistration);
registrationRoutes.get("/regcountbyevent", verifyAdmin, getRegCountByEvent);
registrationRoutes.get("/:id", verifyAdmin, getRegistrationByEvent);
// registrationRoutes.get("/verify/:id", verifyEmail);
// registrationRoutes.get("/send-verification-link/:email", sendVerifyEmail);
registrationRoutes.post("/:event_id", ...registrationValidations, validationErrorHandler, verifyUser, createRegistration);

export default registrationRoutes;