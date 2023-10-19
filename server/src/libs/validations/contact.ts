import { body } from "express-validator";

export const contactValidations = [
    body("name").trim().exists().withMessage("Name can not be empty"),
    body("email").isEmail().withMessage("Invalid Email"),
    body("message").exists().withMessage("Message can not be empty"),
];