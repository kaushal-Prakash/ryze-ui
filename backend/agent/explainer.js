import { getResponse } from "./gemini.js";

export async function runExplainer(plan, code) {
  const prompt = `
Explain in simple terms:
- Why this layout was chosen
- Why each component was used

Plan:
${JSON.stringify(plan, null, 2)}

Generated Code:
${code}
`;

  return await getResponse({prompt});
}