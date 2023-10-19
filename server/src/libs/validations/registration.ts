import { body, check } from "express-validator";
import Registration from "../../model/Registration";

export const registrationValidations = [
  body("team_name").exists()
  .custom(async (value) => {
    const team_name = await Registration.findOne({ team_name: value });
    if(team_name) throw new Error("This team name is already used try something unique");
    return true;
  })
  .withMessage("This team name is already used try something unique"),

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

  .withMessage("One of your team mates email seems invalid"),
 
  check("team_members.*.phone_number").custom(async(v) => {
    if(!(/^\d{10}$/.test(v))) throw new Error("Invalid phone number for a team member");
      return true;
    })
    .withMessage("One of your team mates phone number seems invalid"),
  ];

  // TODO
  // temporarily hard coded max min members, may need to set them to db

  // TODO
  // check if event object id exist inside participant documents. if so that means
  // same person in same event but 2 different team
