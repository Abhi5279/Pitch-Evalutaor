import SelectedProject from "../models/SelectedProject.model.js";
import Evaluation from "../models/Evaluation.model.js";

/* ============================================================
   SELECT PROJECT (Add to Wishlist / Active Projects)
============================================================ */

export const selectProject = async (req, res) => {
  try {
    const userId = req.user.id;
    const { evaluationId } = req.body;

    if (!evaluationId) {
      return res.status(400).json({
        success: false,
        message: "evaluationId is required"
      });
    }

    const evaluation = await Evaluation.findById(evaluationId);

    if (!evaluation) {
      return res.status(404).json({
        success: false,
        message: "Evaluation not found"
      });
    }

    // Prevent duplicate selection
    const existing = await SelectedProject.findOne({
      userId,
      evaluationId
    });

    if (existing) {
      return res.status(400).json({
        success: false,
        message: "Project already selected"
      });
    }

    const project = await SelectedProject.create({
      userId,
      evaluationId,
      title: evaluation.script.slice(0, 60),
      script: evaluation.script,
      weightedOverallScore: evaluation.weightedOverallScore
    });

    return res.json({
      success: true,
      message: "Project selected successfully",
      project
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to select project",
      error: error.message
    });
  }
};



/* ============================================================
   GET USER SELECTED PROJECTS
============================================================ */

export const getMyProjects = async (req, res) => {
  try {
    const userId = req.user.id;

    const projects = await SelectedProject.find({ userId })
      .sort({ createdAt: -1 });

    return res.json({
      success: true,
      projects
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch projects",
      error: error.message
    });
  }
};


/* ============================================================
   REMOVE PROJECT (Unselect / Remove from Wishlist)
============================================================ */

export const removeProject = async (req, res) => {
  try {
    const userId = req.user.id;
    const { evaluationId } = req.params;

    const project = await SelectedProject.findOneAndDelete({
      userId,
      evaluationId
    });

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found in selected list"
      });
    }

    return res.json({
      success: true,
      message: "Project removed successfully"
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to remove project",
      error: error.message
    });
  }
};
