import SelectedProject from "../models/SelectedProject.model.js";
import { callGemini } from "../services/gemini/gemini.service.js";

/* ============================================================
   MILESTONE ROADMAP GENERATOR
============================================================ */

export const generateMilestones = async (req, res) => {
  try {
    const userId = req.user.id;
    const { projectId, customInstructions } = req.body;

    if (!projectId) {
      return res.status(400).json({
        success: false,
        message: "projectId is required"
      });
    }

    const project = await SelectedProject.findOne({
      _id: projectId,
      userId
    });

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found"
      });
    }

    const prompt = `
You are a senior technical architect and project execution strategist.

PROJECT DESCRIPTION:
${project.script}

USER CUSTOM INSTRUCTIONS:
${customInstructions || "None"}

Generate a detailed execution roadmap.

Requirements:
- Divide into 4 to 5 phases.
- Each phase must include:
  - phaseTitle
  - goal
  - durationEstimate
  - detailed steps
  - tools and technologies
  - data collection guidance
  - testing strategy
  - deployment guidance
  - youtubeLinks (array)
  - githubReferences (array)
  - researchPapers (array)

Return ONLY valid JSON in this format:

{
  "projectOverview": "",
  "totalEstimatedDuration": "",
  "phases": [
    {
      "phaseTitle": "",
      "goal": "",
      "durationEstimate": "",
      "steps": [],
      "tools": [],
      "dataGuidance": "",
      "testingStrategy": "",
      "deployment": "",
      "youtubeLinks": [],
      "githubReferences": [],
      "researchPapers": []
    }
  ],
  "riskMitigation": [],
  "scalingPlan": "",
  "finalAdvice": ""
}

Rules:
- No markdown
- No text outside JSON
- Be structured and professional
`;

    const raw = await callGemini(prompt);

    const start = raw.indexOf("{");
    const end = raw.lastIndexOf("}");

    if (start === -1 || end === -1) {
      throw new Error("Gemini did not return valid JSON");
    }

    const parsed = JSON.parse(raw.slice(start, end + 1));

    return res.json({
      success: true,
      roadmap: parsed
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Milestone generation failed",
      error: error.message
    });
  }
};


// import SelectedProject from "../models/SelectedProject.model.js";
// import { callGemini } from "../services/gemini/gemini.service.js";

// /* ============================================================
//    MILESTONE ROADMAP GENERATOR
// ============================================================ */

// export const generateMilestones = async (req, res) => {
//   try {
//     const userId = req.user.id;
//     const { projectId, customInstructions } = req.body;

//     if (!projectId) {
//       return res.status(400).json({
//         success: false,
//         message: "projectId is required"
//       });
//     }

//     const project = await SelectedProject.findOne({
//       _id: projectId,
//       userId
//     });

//     if (!project) {
//       return res.status(404).json({
//         success: false,
//         message: "Project not found"
//       });
//     }

//     /* ================= PROMPT ================= */

//     const prompt = `
// You are a senior technical architect and project execution strategist.

// PROJECT DESCRIPTION:
// ${project.script}

// USER CUSTOM INSTRUCTIONS:
// ${customInstructions || "None"}

// Generate a detailed execution roadmap.

// Requirements:
// - Divide into 4 to 5 phases.
// - Each phase must include:
//   - phaseTitle
//   - goal
//   - durationEstimate
//   - detailed steps
//   - tools and technologies
//   - data collection guidance
//   - testing strategy
//   - deployment guidance
//   - youtubeLinks (array of VALID working YouTube URLs)
//   - githubReferences (array of VALID public GitHub repository URLs)
//   - researchPapers (array of real research paper links such as IEEE, Springer, arXiv, etc.)

// STRICT LINK RULES:
// - All YouTube links MUST be real, clickable, and working (https://www.youtube.com/...)
// - All GitHub links MUST be real, public repositories (https://github.com/...)
// - Links must NOT be placeholders.
// - Links must NOT be example.com.
// - Links must NOT be fake.
// - Links must be relevant to the phase topic.
// - They do NOT need to be the exact same project, but must be similar and technically related.
// - Minimum:
//    • At least 2 youtubeLinks per phase
//    • At least 2 githubReferences per phase
//    • At least 1 researchPapers link per phase

// Return ONLY valid JSON in this format:

// {
//   "projectOverview": "",
//   "totalEstimatedDuration": "",
//   "phases": [
//     {
//       "phaseTitle": "",
//       "goal": "",
//       "durationEstimate": "",
//       "steps": [],
//       "tools": [],
//       "dataGuidance": "",
//       "testingStrategy": "",
//       "deployment": "",
//       "youtubeLinks": [],
//       "githubReferences": [],
//       "researchPapers": []
//     }
//   ],
//   "riskMitigation": [],
//   "scalingPlan": "",
//   "finalAdvice": ""
// }

// Rules:
// - No markdown
// - No text outside JSON
// - Must return valid parsable JSON
// - Must include working links as specified above
// - Be structured and professional
// `;

//     /* ================= CALL GEMINI ================= */

//     const raw = await callGemini(prompt);

//     const start = raw.indexOf("{");
//     const end = raw.lastIndexOf("}");

//     if (start === -1 || end === -1) {
//       throw new Error("Gemini did not return valid JSON");
//     }

//     const parsed = JSON.parse(raw.slice(start, end + 1));

//     /* ================= LINK VALIDATION ================= */

//     const isValidYouTube = (url) =>
//       typeof url === "string" &&
//       url.startsWith("https://www.youtube.com/");

//     const isValidGitHub = (url) =>
//       typeof url === "string" &&
//       url.startsWith("https://github.com/");

//     parsed.phases.forEach((phase, index) => {
//       if (!Array.isArray(phase.youtubeLinks) || phase.youtubeLinks.length < 2) {
//         throw new Error(`Phase ${index + 1} must contain at least 2 YouTube links`);
//       }

//       if (!Array.isArray(phase.githubReferences) || phase.githubReferences.length < 2) {
//         throw new Error(`Phase ${index + 1} must contain at least 2 GitHub references`);
//       }

//       if (!Array.isArray(phase.researchPapers) || phase.researchPapers.length < 1) {
//         throw new Error(`Phase ${index + 1} must contain at least 1 research paper link`);
//       }

//       phase.youtubeLinks.forEach((link) => {
//         if (!isValidYouTube(link)) {
//           throw new Error(`Invalid YouTube link detected in Phase ${index + 1}`);
//         }
//       });

//       phase.githubReferences.forEach((link) => {
//         if (!isValidGitHub(link)) {
//           throw new Error(`Invalid GitHub link detected in Phase ${index + 1}`);
//         }
//       });
//     });

//     /* ================= SUCCESS RESPONSE ================= */

//     return res.json({
//       success: true,
//       roadmap: parsed
//     });

//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       message: "Milestone generation failed",
//       error: error.message
//     });
//   }
// };
