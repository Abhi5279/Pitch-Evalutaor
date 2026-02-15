import express from "express";
import { protect } from "../middlewares/auth.middleware.js";
import {
  selectProject,
  getMyProjects,
  removeProject

} from "../controllers/project.controller.js";

const router = express.Router();

// Select project
router.post("/select", protect, selectProject);

// Get user projects
router.get("/my-projects", protect, getMyProjects);

router.delete("/remove/:evaluationId", protect, removeProject);


export default router;


