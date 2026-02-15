import express from "express";
import {
  evaluatePitch,
  explainPitch,
  evaluatePitchFromPDF,
  getMyEvaluations,
  getEvaluationById
} from "../controllers/pitch.controller.js";

import { protect } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/upload.middleware.js";

const router = express.Router();

// TEXT evaluation
router.post("/evaluate", protect, evaluatePitch);

// PDF evaluation
router.post(
  "/evaluate-pdf",
  protect,
  upload.single("file"),
  evaluatePitchFromPDF
);

// Explanation
router.post("/explain/:id", protect, explainPitch);

router.get("/my-evaluations", protect, getMyEvaluations);

router.get("/:id", protect, getEvaluationById);



export default router;
