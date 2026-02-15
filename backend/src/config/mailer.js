import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "abhishek5279p@gmail.com",
    pass: "bibb brkm ndtw egyt"
  },
  tls: {
    rejectUnauthorized: false
  }
});
