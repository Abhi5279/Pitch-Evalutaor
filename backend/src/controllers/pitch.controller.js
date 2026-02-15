

import Evaluation from "../models/Evaluation.model.js";
import User from "../models/User.model.js";
import { transporter } from "../config/mailer.js";
import { callGemini } from "../services/gemini/gemini.service.js";
import {
  buildScoringPrompt,
  buildExplanationPrompt
} from "../services/prompts/pitchEvaluation.prompt.js";
import { extractTextFromPDF } from "../services/pdf.service.js";


/* ============================================================
   UTILITY — Weighted Overall Score Calculation
============================================================ */

const computeWeightedScore = (coreScores, communicationScores) => {
  const coreWeight = 0.6;
  const communicationWeight = 0.4;

  const coreValues = Object.values(coreScores).map(item => item.score);
  const coreAverage =
    coreValues.reduce((a, b) => a + b, 0) / coreValues.length;

  const communicationValues = Object.values(communicationScores);
  const communicationAverage =
    communicationValues.reduce((a, b) => a + b, 0) /
    communicationValues.length;

  const weighted =
    coreAverage * coreWeight +
    communicationAverage * communicationWeight;

  return Number(weighted.toFixed(2));
};



/* ============================================================
   CORE EVALUATION ENGINE (USED BY TEXT & PDF)
============================================================ */

const evaluatePitchCore = async ({
  userId,
  script,
  audience,
  timeLimit,
  domain,
  stage,
  fundingAmount,
  geography,
  industryMaturity
}) => {

  const prompt = buildScoringPrompt(
    script,
    audience,
    timeLimit,
    domain,
    stage,
    fundingAmount,
    geography,
    industryMaturity
  );

  const raw = await callGemini(prompt);

  const start = raw.indexOf("{");
  const end = raw.lastIndexOf("}");

  if (start === -1 || end === -1) {
    throw new Error("Gemini did not return valid JSON");
  }

  const parsed = JSON.parse(raw.slice(start, end + 1));

  const weightedOverallScore = computeWeightedScore(
    parsed.coreScores,
    parsed.communicationScores
  );

  const savedEvaluation = await Evaluation.create({
    userId,
    script,
    audience,
    timeLimit,
    domain,
    coreScores: parsed.coreScores,
    communicationScores: parsed.communicationScores,
    riskScores: parsed.riskScores,
    weightedOverallScore
  });
  // Send email notification
  const user = await User.findById(userId);

  if (user) {
    await transporter.sendMail({
      from: `"Pitch Evaluator" <abhishek5279p@gmail.com>`,
      to: user.email,
      subject: "Your Pitch Evaluation is Completed",
      text: `Hello ${user.name},

Your pitch evaluation has been completed.

Overall Score: ${weightedOverallScore}

Login to view detailed analysis.

– Pitch Evaluation System`
    });
  }

  return { savedEvaluation, weightedOverallScore, parsed };
};


/* ============================================================
   PHASE 1 — TEXT EVALUATION
============================================================ */

export const evaluatePitch = async (req, res) => {
  try {
    const userId = req.user.id;

    const {
      script,
      audience,
      timeLimit,
      domain,
      stage,
      fundingAmount,
      geography,
      industryMaturity
    } = req.body;

    if (!script || typeof script !== "string") {
      return res.status(400).json({
        success: false,
        message: "script is required and must be a string"
      });
    }

    const { savedEvaluation, weightedOverallScore, parsed } =
      await evaluatePitchCore({
        userId,
        script,
        audience,
        timeLimit,
        domain,
        stage,
        fundingAmount,
        geography,
        industryMaturity
      });

    return res.json({
      success: true,
      evaluationId: savedEvaluation._id,
      weightedOverallScore,
      coreScores: parsed.coreScores,
      communicationScores: parsed.communicationScores,
      riskScores: parsed.riskScores
    });

  } catch (error) {
    console.error("Pitch Evaluation Error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Pitch evaluation failed",
      error: error.message
    });
  }
};


/* ============================================================
   PHASE 1 — PDF EVALUATION (SAME ENGINE)
============================================================ */

export const evaluatePitchFromPDF = async (req, res) => {
  try {
    const userId = req.user.id;

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "PDF file is required"
      });
    }

    const extractedText = await extractTextFromPDF(req.file.buffer);

    if (!extractedText || extractedText.trim().length < 30) {
      return res.status(400).json({
        success: false,
        message: "Could not extract enough text from PDF"
      });
    }

    const { savedEvaluation, weightedOverallScore, parsed } =
      await evaluatePitchCore({
        userId,
        script: extractedText
      });

    return res.json({
      success: true,
      evaluationId: savedEvaluation._id,
      weightedOverallScore,
      coreScores: parsed.coreScores,
      communicationScores: parsed.communicationScores,
      riskScores: parsed.riskScores
    });

  } catch (error) {
    console.error("PDF Evaluation Error:", error.message);

    return res.status(500).json({
      success: false,
      message: "PDF evaluation failed",
      error: error.message
    });
  }
};


/* ============================================================
   PHASE 2 — EXPLANATION USING STORED SCORES
============================================================ */

export const explainPitch = async (req, res) => {
  try {
    const { id } = req.params;

    const evaluation = await Evaluation.findById(id);

    if (!evaluation) {
      return res.status(404).json({
        success: false,
        message: "Evaluation not found"
      });
    }

    if (evaluation.explanation) {
      return res.json({
        success: true,
        evaluationId: evaluation._id,
        weightedOverallScore: evaluation.weightedOverallScore,
        explanation: evaluation.explanation,
        cached: true
      });
    }

    const prompt = buildExplanationPrompt(
      evaluation.script,
      {
        coreScores: evaluation.coreScores,
        communicationScores: evaluation.communicationScores,
        riskScores: evaluation.riskScores,
        weightedOverallScore: evaluation.weightedOverallScore
      }
    );

    const raw = await callGemini(prompt);

    const start = raw.indexOf("{");
    const end = raw.lastIndexOf("}");

    if (start === -1 || end === -1) {
      throw new Error("Gemini did not return valid JSON");
    }

    const explanation = JSON.parse(raw.slice(start, end + 1));

    evaluation.explanation = explanation;
    await evaluation.save();

    return res.json({
      success: true,
      evaluationId: evaluation._id,
      weightedOverallScore: evaluation.weightedOverallScore,
      explanation,
      cached: false
    });

  } catch (error) {
    console.error("Explanation Error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Explanation generation failed",
      error: error.message
    });
  }
};


export const getMyEvaluations = async (req, res) => {
  try {
    const userId = req.user.id;

    const evaluations = await Evaluation.find({ userId })
      .sort({ createdAt: -1 });

    return res.json({
      success: true,
      evaluations
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch evaluations",
      error: error.message
    });
  }
};

export const getEvaluationById = async (req, res) => {
  try {
    const { id } = req.params;

    const evaluation = await Evaluation.findById(id);

    if (!evaluation) {
      return res.status(404).json({
        success: false,
        message: "Evaluation not found"
      });
    }

    return res.json({
      success: true,
      evaluation
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch evaluation",
      error: error.message
    });
  }
};


