import { Request, Response } from "express";
import Registration from "../model/Registration";
import sendMailVerficationLink from "../libs/mail/sendMailVerficationLink";
import { JwtPayload, verify } from "jsonwebtoken";
import Event from "../model/Event";

export const getRegistration = async (req: Request, res: Response) => {
  try {
    const registrations = await Registration.find();
    res.status(200).json({ error: false, registrations });
  } catch (err) {
    const error = err as Error;
    console.log(error.message);
    res.status(500).json({
      error: true,
      message: `Failed to get registrations. ${error.message}`,
    });
  }
};

export const createRegistration = async (req: Request, res: Response) => {
  try {
    const {
      team_name,
      team_members,
      email,
      phone_number,
      payment_phone_number,
      trxId,
    } = req.body;
    const { event_id } = req.params;

    const event = await Event.findById(event_id);
    if (!event)
      return res.status(404).json({ error: true, message: "Event not found" });

    // Add to db, then send an email verification link
    const registration = await Registration.create({
      team_name,
      team_members,
      phone_number,
      email,
      payment_phone_number,
      trxId,
      event: event_id,
      status: "pending",
    });
    await registration.save();
    // sendMailVerficationLink(registration._id.toString(), email);
    res.status(200).json({
      error: false,
      message: "Registration successful.",
    });
  } catch (err) {
    const error = err as Error;
    console.log(error.message);
    res
      .status(500)
      .json({ error: true, message: `There was an error. ${error.message}` });
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

export async function sendVerifyEmail(req: Request, res: Response) {
  try {
    const { email } = req.params;
    // check if a registration exist with the email.
    // then send verification link email.
    const reg = await Registration.findOne({ email });
    if (reg) sendMailVerficationLink(reg._id.toString(), email);
    res.status(200).json({ error: false, message: "Verification mail sent" });
  } catch (err) {
    const error = err as Error;
    console.log(error.message);
    res
      .status(500)
      .json({ error: true, message: `There was an error. ${error.message}` });
  }
}

export const getRegistrationByEvent = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const registrations = await Registration.find({event: id});
      res.status(200).json({ error: false, registrations });        
    } catch (error) {
        const err = error as Error;
        console.log(err.message);
        res
        .status(500)
        .json({
            error: true,
            message: `Unexpected error occured on the server. ${err.message}`,
        });
    }
}

export const getRegCountByEvent = async (req: Request, res: Response) => {
  try {
    const totalCount = await Registration.count();
    const data = await Registration.aggregate([
      {
        $lookup: {
          from: "events",
          localField: "event",
          foreignField: "_id",
          as: "event_details",
        },
      },
      {
        $unwind: "$event_details",
      },
      {
        $group: {
          _id: "$event",
          event_id: { $first: "$event_details._id" },
          event_name: { $first: "$event_details.name" },
          count: { $sum: 1 },
        },
      },
      {
        $project: {
          _id: 0,
          event_id: 1,
          event_name: 1,
          count: 1,
        },
      },
    ]);
    res.status(200).json({ error: false, totalCount, data });
  } catch (error) {
    const err = error as Error;
    console.log(err.message);
    res.status(500).json({
      error: true,
      message: `Unexpected error occured on the server. ${err.message}`,
    });
  }
};
