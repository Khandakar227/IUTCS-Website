import { Secret, sign } from "jsonwebtoken";
import { mailConfig, transporter } from "./transport";

const urlPath = (regId:string) => {
    const token = sign({regId, type: 'email-verification' }, process.env.JWT_SECRET as Secret, {
        expiresIn: process.env.EMAIL_VERIFICATION_EXPIRES_IN,
      });
      return token;   
}

const sendMailVerficationLink = (regId:string, email:string) => {
    const  mailOptions = {
        from: mailConfig.email,
        to: email,
        subject: 'Verify your email',
        html: `
        <p>Your registration is pending. please verify your email to confirm registration.</p>
        <p> <a href="${process.env.CLIENT_URL}/${urlPath(regId)}" target="blank">
            ${process.env.CLIENT_URL}/${urlPath(regId)}</a>
        </p>
        `
      };
      transporter.sendMail(mailOptions, (err, info)=>{
        console.log(info);
        if (err) throw new Error(err.message);
      });
}

export default sendMailVerficationLink;