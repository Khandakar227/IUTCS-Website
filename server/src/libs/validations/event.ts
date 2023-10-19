import { body } from "express-validator";

export const createEventValidations = [
    // name, description, event_start_date, event_end_date, registration_open, max_team_members
    body("name").exists().withMessage("Event Name is required"),
    body("event_start_date").matches(/^(?:\d{4})-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12][0-9]|3[01])$/).withMessage("Invalid Start date format"),
    body("event_end_date").matches(/^(?:\d{4})-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12][0-9]|3[01])$/).withMessage("Invalid Start date format"),
    body("max_team_members").isNumeric().withMessage("Max team members value is invalid"),
]