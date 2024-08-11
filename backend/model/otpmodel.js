// models/UserOTP.js
const mongoose = require('mongoose');

const UserOTPSchema = new mongoose.Schema({
  email: String,
  otp: String,
  createdAt: { type: Date, expires: '5m', default: Date.now }
});

module.exports = mongoose.model('UserOTP', UserOTPSchema);
