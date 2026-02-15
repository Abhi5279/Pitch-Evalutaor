
/* ============================================================
   PHASE 1 — STRUCTURED NUMERIC SCORING PROMPT
   Minimal AI dependency
   Only scores + 1-line reason
============================================================ */

export const buildScoringPrompt = (
  script,
  audience,
  timeLimit,
  domain
) => {
  return `
You are an institutional investor performing structured pitch scoring.

Be analytical, critical, and objective.
No motivational language.
Return only structured scoring.

Context:
Audience: ${audience || "General Investors"}
Time Limit: ${timeLimit || "Not Specified"}
Domain: ${domain || "General Industry"}

Pitch Script:
"""
${script}
"""

Instructions:
- Score strictly from 0–10.
- Provide ONE short reason per core dimension.
- No long explanations.
- No rewriting.
- No markdown.
- Return ONLY valid JSON.

{
  "coreScores": {
    "problemClarity": { "score": 0, "reason": "" },
    "solutionStrength": { "score": 0, "reason": "" },
    "marketUnderstanding": { "score": 0, "reason": "" },
    "differentiation": { "score": 0, "reason": "" },
    "tractionEvidence": { "score": 0, "reason": "" },
    "businessModelClarity": { "score": 0, "reason": "" },
    "scalabilityPotential": { "score": 0, "reason": "" },
    "defensibility": { "score": 0, "reason": "" }
  },

  "communicationScores": {
    "clarity": 0,
    "logicalFlow": 0,
    "authorityTone": 0,
    "conciseness": 0,
    "persuasiveness": 0,
    "confidenceSignal": 0
  },

  "riskScores": {
    "executionRisk": 0,
    "marketRisk": 0,
    "competitiveRisk": 0,
    "credibilityRisk": 0
  }
}
`;
};



export const buildExplanationPrompt = (
  script,
  storedScores
) => {
  return `
You are an institutional investor performing post-evaluation analysis.

You are NOT scoring the pitch.
Scores are already finalized by the system.

Your task is to justify and explain those exact scores.

You must:
- Explain why each score was given.
- Reference the pitch content directly.
- Identify evidence supporting the numeric value.
- Identify what prevented a higher score.
- Do NOT modify or contradict any score.
- Do NOT rescore.
- Do NOT generate new numeric ratings.

Pitch Script:
"""
${script}
"""

System-Generated Structured Scores:
${JSON.stringify(storedScores, null, 2)}

Return ONLY valid JSON in this format:

{
  "scoreJustification": {
    "coreScores": {
      "problemClarity": "",
      "solutionStrength": "",
      "marketUnderstanding": "",
      "differentiation": "",
      "tractionEvidence": "",
      "businessModelClarity": "",
      "scalabilityPotential": "",
      "defensibility": ""
    },
    "communicationScores": {
      "clarity": "",
      "logicalFlow": "",
      "authorityTone": "",
      "conciseness": "",
      "persuasiveness": "",
      "confidenceSignal": ""
    },
    "riskScores": {
      "executionRisk": "",
      "marketRisk": "",
      "competitiveRisk": "",
      "credibilityRisk": ""
    }
  },

  "keyStrengths": [],
  "keyWeaknesses": [],
  "majorGapsBlockingHigherScore": [],
  "investorLikelyQuestions": [],
  "improvementPriorityOrder": [],
  "refinedVersion": "",
  "elite60SecondVersion": "",
  "investorOneLiner": ""
}

Rules:
- Every explanation must align with the numeric score already provided.
- If score is low → explain specific deficiency.
- If score is high → justify with strong evidence.
- Be analytical, not motivational.
- No markdown.
- No text outside JSON.
`;
};
