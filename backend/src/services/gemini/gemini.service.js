import { GoogleGenerativeAI } from "@google/generative-ai";

export const callGemini = async (prompt) => {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error("GEMINI_API_KEY not found");
  }

  const genAI = new GoogleGenerativeAI(apiKey);

  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash-lite"
  });

  const result = await model.generateContent(prompt);

  return result.response.text();
};
