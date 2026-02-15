import { callGemini } from "./gemini.service.js";
import { buildPitchEvaluationPrompt } from "../prompts/pitchEvaluation.prompt.js";

export const evaluatePitchWithGemini = async (
  script,
  audience,
  timeLimit,
  domain
) => {
  const prompt = buildPitchEvaluationPrompt(
    script,
    audience,
    timeLimit,
    domain
  );

  const raw = await callGemini(prompt);

  const start = raw.indexOf("{");
  const end = raw.lastIndexOf("}");

  if (start === -1 || end === -1) {
    throw new Error("Gemini did not return valid JSON");
  }

  const jsonString = raw.slice(start, end + 1);

  return JSON.parse(jsonString);
};
