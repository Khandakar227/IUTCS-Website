import { body, check } from "express-validator";
import Registration from "../../model/Registration";

export const registrationValidations = [
  body("team_name").exists().withMessage("Team name is required"),

  body("university").exists().withMessage("Name of your university is required"),
  
  check("phone_number").custom(v => /^(01|\+8801)\d{9}$/.test(v)).withMessage("Invalid phone number"),
  
  check("email")
    .custom(async (value) => {
      return (await Registration.findOne({ email: value })) ? true : false;
    }).withMessage("Already registered using this email"),

  check("team_members")
    // temporarily hard coded max min members, may need to set them to db
    .custom(v => v.length > 0 && v.length <= 4 ? true : false)
    .withMessage("Number of team members at max must be 4")
];
