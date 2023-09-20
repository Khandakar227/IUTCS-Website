import {createTransport} from 'nodemailer';

export const mailConfig = {
    email: `"IUTCS" <${process.env.MAIL_SENDER_EMAIL}>`,
    title: '',
    description: '',
    logo_url: '',
}

export const transporter = createTransport({
    service: 'gmail',
    auth: {
        user: process.env.MAIL_SENDER_EMAIL,
        pass: process.env.MAIL_SENDER_PASS
    }
})