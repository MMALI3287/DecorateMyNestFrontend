import expressAsyncHandler from "express-async-handler";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
const mail = process.env.REACT_APP_SMTP_MAIL;
const password = process.env.REACT_APP_SMTP_PASS;
const transporter = nodemailer.createTransport({
  host: process.env.REACT_APP_SMTP_HOST,
  port: process.env.REACT_APP_SMTP_PORT,
  secure: false,
  service: "gmail",
  auth: {
    user: mail.toString(),
    pass: password.toString(),
  },
});

const contactMail = expressAsyncHandler(async (req, res) => {
  const { name, email, subject, message } = req.body;
  console.log(name, email, subject, message);

  const mailOptions = {
    from: process.env.REACT_APP_SMTP_MAIL,
    to: "musaddique.ali.erfan@gmail.com",
    subject: subject,
    html: message,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    console.log("SMTP_MAIL:", process.env.REACT_APP_SMTP_MAIL);
    console.log("SMTP_PASS:", process.env.REACT_APP_SMTP_PASS);
    if (error) {
      res.status(500).json({ message: "Something went wrong" });
      console.error("Error sending email:", error);
    } else {
      res.status(200).json({ message: "Email sent successfully" });
    }
  });
});

export default contactMail;
