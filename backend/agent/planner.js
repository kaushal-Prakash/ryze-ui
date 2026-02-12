import { getResponse } from "./gemini.js";

export async function runPlanner(userPrompt, previousCode) {
  const prompt = `
You are a UI Planner.

User Request:
${userPrompt}

Previous UI Code (if any):
${previousCode || "None"}

You must ONLY choose from these components:
Button, Card, Input, Table, Modal, Sidebar, Navbar, Chart.

Output ONLY valid JSON like this:
{
  "layout": "column or row",
  "components": [
    { "type": "Card", "props": { "title": "Dashboard" } },
    { "type": "Button", "props": { "label": "Settings" } }
  ]
}
`;

  const responseText = await getResponse({ prompt });

  try {
    return JSON.parse(responseText);  
  } catch (err) {
    console.error("Planner JSON parse error:", responseText);
    throw new Error("Planner returned invalid JSON");
  }
}
