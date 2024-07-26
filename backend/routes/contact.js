const express = require("express");
const nodemailer = require("nodemailer");
const route = express.Router();
const { EMAILS_USER, EMAILS_PASS } = process.env;

route.post("/", (req, res) => {
  const { name, email, subject, message } = req.body;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAILS_USER,
      pass: EMAILS_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: EMAILS_USER,
    subject: subject,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send("Email send: " + info.response);
  });
});

module.exports = route;
