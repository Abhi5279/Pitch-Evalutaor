import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.config.js";
import pitchRoutes from "./routes/pitch.routes.js";
import authRoutes from "./routes/auth.routes.js";
import milestoneRoutes from "./routes/milestone.routes.js";


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/pitch", pitchRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/milestones", milestoneRoutes);


import projectRoutes from "./routes/project.routes.js";

app.use("/api/projects", projectRoutes);


const PORT = process.env.PORT || 5000;

connectDB();

console.log("JWT_SECRET at startup:", process.env.JWT_SECRET);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
