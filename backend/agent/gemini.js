import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
dotenv.config()
const ai = new GoogleGenAI({apiKey:process.env.GEMINI});

export async function getResponse({prompt}) {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
  });
  return response.text;
}