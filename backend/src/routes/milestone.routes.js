import express from "express";
import { protect } from "../middlewares/auth.middleware.js";
import { generateMilestones } from "../controllers/milestone.controller.js";

const router = express.Router();

/* ============================================================
   GENERATE MILESTONE ROADMAP
============================================================ */

router.post("/generate", protect, generateMilestones);

export default router;
