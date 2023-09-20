import { Request, Response } from "express";
import Registration from "../model/Registration";
import sendMailVerficationLink from "../libs/mail/sendMailVerficationLink";
import { JwtPayload, verify } from "jsonwebtoken";
import Participant from "../model/Participant";

export const getRegistration = async (req: Request, res: Response) => {
  try {
  } catch (err) {
    const error = err as Error;
    console.log(error.message);
    res
      .status(500)
      .json({
        error: true,
        message: `Failed to get registrations. ${error.message}`,
      });
  }
};
export const createRegistration = async (req: Request, res: Response) => {
  try {
    const { team_name, team_members, email, phone_number, university } =
      req.body;
    // Express validator error handler
    const team_mates: { email: string; name: string; phone_number: string }[] =
      team_members;
    // const team_members_id = await Promise.all(
    //   team_mates.map(async (member) => {
    //     const p = await Participant.create({...member, university});
    //     // await p.save();
    //     return p._id;
    //   })
    // );

    // // Add to db, then send an email verification link
    // const registration = await Registration.create({
    //   team_name,
    //   team_members: team_members_id,
    //   phone_number,
    //   email,
    //   university,
    //   status: "pending",
    // });
    // await registration.save();
    // // sendMailVerficationLink(registration._id.toString(), email);
    res
      .status(200)
      .json({
        error: false,
        message: "Registration successful. Check your mail to verify.",
      });
  } catch (err) {
    const error = err as Error;
    console.log(error.message);
    res
      .status(500)
      .json({ error: true, message: `Registration failed. ${error.message}` });
  }
};

export const verifyEmail = async (req: Request, res: Response) => {
  try {
    //verify token which is in param
    const { id } = req.params;
    const token = verify(
      id,
      process.env.JWT_SECRET as string,
      function (err, decoded) {
        if (err)
          return res.status(403).json({ error: true, message: err.message });
        if (
          !decoded ||
          typeof decoded == "string" ||
          (decoded as JwtPayload)?.type != "email-verification"
        )
          return res
            .status(403)
            .json({ error: true, message: `Invalid type or format of token` });

        const reg = Registration.findByIdAndUpdate(decoded.regId, {
          $set: { verified: true },
        });
        res
          .status(200)
          .json({ error: false, message: "Your email has been verified." });
      }
    );
  } catch (err) {
    const error = err as Error;
    console.log(error.message);
    res
      .status(500)
      .json({ error: true, message: `Verification failed. ${error.message}` });
  }
};