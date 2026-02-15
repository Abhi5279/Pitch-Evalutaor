import mongoose from "mongoose";

const selectedProjectSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    evaluationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Evaluation",
      required: true
    },

    title: {
      type: String,
      default: "Untitled Project"
    },

    script: {
      type: String,
      required: true
    },

    weightedOverallScore: {
      type: Number,
      required: true
    },

    status: {
      type: String,
      enum: ["active", "completed", "archived"],
      default: "active"
    }

  },
  { timestamps: true }
);

export default mongoose.model("SelectedProject", selectedProjectSchema);
