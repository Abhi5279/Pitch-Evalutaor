
import mongoose from "mongoose";

const evaluationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    script: {
      type: String,
      required: true
    },

    audience: String,
    timeLimit: String,
    domain: String,

    coreScores: Object,
    communicationScores: Object,
    riskScores: Object,

    weightedOverallScore: Number,

    explanation: Object
  },
  { timestamps: true }
);

export default mongoose.model("Evaluation", evaluationSchema);
