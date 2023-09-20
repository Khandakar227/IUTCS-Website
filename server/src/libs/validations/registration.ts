import { body, check } from "express-validator";
import Registration from "../../model/Registration";
import Participant from "../../model/Participant";

type ParticipantType = {
  name: string;
  email: string;
  phone_number: string;
  university: string;
};

export const registrationValidations = [
  body("team_name").exists().withMessage("Team name is required"),

  body("university")
    .exists()
    .withMessage("Name of your university is required"),

  check("phone_number")
    .custom((v) => /^(01|\+8801)\d{9}$/.test(v))
    .withMessage("Invalid phone number"),

  check("email")
    .custom(async (value) => {
      return (await Registration.findOne({ email: value })) ? true : false;
    })
    .withMessage("Already registered using this email"),

  body("team_members").exists().isArray({ min: 1, max: 4 })
    .withMessage("Please ensure you have at least 1 team member and a maximum of 4 team members."),
  
  body("team_members.*.name").exists().withMessage("Missing team mate name"),
 
  check("team_members.*.email").exists().isEmail()
  .custom(async(v) => {
    const ifEmailExist = await Participant.findOne({email: v});
    if (ifEmailExist) throw new Error("Phone number is already used");
    return true;
  })
  .withMessage("Invalid team mate email or email is already used"),
 
  check("team_members.*.phone_number").custom(async(v) => {
    if(!(/^(01|\+8801)\d{9}$/.test(v))) throw new Error("Invalid phone number");
      const ifPhoneNumExist = await Participant.findOne({phone_number: v});
      if (ifPhoneNumExist) throw new Error("Phone number is already used");
      return true;
    })
    .withMessage("Invalid phone number or phone number is already used"),
  ];
  // TODO
  // temporarily hard coded max min members, may need to set them to db

  // check("team_members")
  //   .custom(async(v: ParticipantType[]) => {
  //     const validate = v.map(async (member) => {
  //       if (!member.name) return false;
  //       if (!(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(member.email))) return false;
  //       if (!(/^(01|\+8801)\d{9}$/).test(member.phone_number)) return false;
  //       const ifPhoneNumExist = await Participant.findOne({phone_number: member.phone_number});
  //       const ifEmailExist = await Participant.findOne({email: member.email})
  //       if (ifEmailExist || ifPhoneNumExist) return false;
  //       return true;
  //     });
      
  //     return (await Promise.all(validate)).includes(true); // returns true if all are true
  //   }),