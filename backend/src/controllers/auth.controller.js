import User from "../models/User.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { transporter } from "../config/mailer.js";

let otpStore = {}; // In-memory OTP storage


/* ============================================================
   SEND OTP
============================================================ */

export const sendOtp = async (req, res) => {
  try {
    const { email, name } = req.body;

    const existing = await User.findOne({ email });
    if (existing)
      return res.status(400).json({ msg: "User already exists" });

    const otp = Math.floor(100000 + Math.random() * 900000);

    otpStore[email] = {
      otp,
      expires: Date.now() + 5 * 60 * 1000
    };

    await transporter.sendMail({
      from: `"Pitch Evaluator" <abhishek5279p@gmail.com>`,
      to: email,
      subject: "Verify your Email - OTP",
      text: `Hello ${name || "User"},\n\nYour OTP is: ${otp}\nIt expires in 5 minutes.`
    });

    res.json({ msg: "OTP sent successfully" });

  } catch (err) {
    res.status(500).json({ msg: "Failed to send OTP" });
  }
};



/* ============================================================
   REGISTER USER (After OTP Verification)
============================================================ */

export const registerUser = async (req, res) => {
  try {
    const { name, email, password, role, skills, experience, otp } = req.body;

    const otpData = otpStore[email];

    if (!otpData)
      return res.status(400).json({ msg: "OTP not sent" });

    if (Date.now() > otpData.expires)
      return res.status(400).json({ msg: "OTP expired" });

    if (otpData.otp != otp)
      return res.status(400).json({ msg: "Invalid OTP" });

    const existing = await User.findOne({ email });
    if (existing)
      return res.status(400).json({ msg: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role: role || "member",
      skills,
      experience
    });

    delete otpStore[email];

    res.json({ msg: "User registered successfully", user });

  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};



/* ============================================================
   LOGIN USER
============================================================ */

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user)
      return res.status(404).json({ msg: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch)
      return res.status(401).json({ msg: "Invalid credentials" });

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({ token, user });

  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};



/* ============================================================
   GET ALL USERS (Admin)
============================================================ */

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, "name email role skills experience");
    res.json(users);
  } catch (err) {
    res.status(500).json({ msg: "Failed to fetch users" });
  }
};
