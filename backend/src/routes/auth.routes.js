import express from "express";
import {
  sendOtp,
  registerUser,
  loginUser,
  getAllUsers
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/send-otp", sendOtp);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/users", getAllUsers);

export default router;
