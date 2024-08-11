const express = require('express');
const nodemailer = require('nodemailer');
const otpGenerator = require('otp-generator');
const UserOTP = require('../model/otpmodel'); // Ensure this path is correct
const router = express.Router();

router.post('/send-otp', async (req, res) => {
  const { email } = req.body;

  // Generate OTP
  const otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });

  // Save OTP to the database
  const userOTP = new UserOTP({ email, otp });
  await userOTP.save();
 
  // Configure transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Your email ID
      pass: process.env.EMAIL_PASS, // Your email password or app-specific password
    },
  });

  // Send OTP via email
  await transporter.sendMail({
    from: process.env.EMAIL_USER, // Sender's email address
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP code is ${otp}`,
  });

  res.send({ success: true });
});

router.post('/verify-otp', async (req, res) => {
  const { email, otp } = req.body;

  // Find the OTP in the database
  const userOTP = await UserOTP.findOne({ email, otp });
 console.log(userOTP)
  if (userOTP) {
    res.send({ success: true });
  } else {
    res.send({ success: false });
  }
});

module.exports = router;
