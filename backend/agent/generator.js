import { getResponse } from "./gemini.js";

export async function runGenerator(plan, previousCode) {
  const prompt = `
You are a UI Code Generator.

Plan:
${JSON.stringify(plan, null, 2)}

Previous UI Code:
${previousCode || "None"}

You MUST ONLY use these components:
<Card>, <Button>, <Input>, <Table>, <Modal>, <Sidebar>, <Navbar>, <Chart>.

Generate valid React JSX inside fragments <>...</>.
Do NOT add imports.
Modify existing UI if previous code exists.
`;

  return await getResponse({prompt});
}
