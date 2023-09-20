import { body, check } from "express-validator";
import Registration from "../../model/Registration";
import Participant from "../../model/Participant";

export const registrationValidations = [
  body("team_name").exists()
  .custom(async (value) => {
    const team_name = await Registration.findOne({ team_name: value });
    if(team_name) throw new Error("This team name is already used try something unique");
    return true;
  })
  .withMessage("This team name is already used try something unique"),

  body("university")
    .exists()
    .withMessage("Name of your university is required"),

  check("phone_number")
    .custom((v) => /^(01|\+8801)\d{9}$/.test(v))
    .withMessage("Invalid phone number"),

  check("email")
    .custom(async (value) => {
      const email = await Registration.findOne({ email: value });
      if(email) throw new Error("The email was previously used for registration");
      return true;
    }).withMessage("The email was previously used for registration"),

  body("team_members").exists().isArray({ min: 1, max: 4 })
    .withMessage("Please ensure you have at least 1 team member and a maximum of 4 team members."),
  
  body("team_members.*.name").exists().withMessage("Missing team mate name"),
 
  check("team_members.*.email").exists().isEmail()
  .custom(async(v) => {
    const ifEmailExist = await Participant.findOne({email: v});
    if (ifEmailExist)
      throw new Error("Email is already used");
    return true;
  }).withMessage("Invalid team mate email or email is already used"),
 
  check("team_members.*.phone_number").custom(async(v) => {
    if(!(/^(01|\+8801)\d{9}$/.test(v))) throw new Error("Invalid phone number");
      const ifPhoneNumExist = await Participant.findOne({phone_number: v});
      if (ifPhoneNumExist)
        throw new Error("Phone number is already used");
      return true;
    }).withMessage("Invalid phone number or phone number is already used"),
  ];
  // TODO
  // temporarily hard coded max min members, may need to set them to db