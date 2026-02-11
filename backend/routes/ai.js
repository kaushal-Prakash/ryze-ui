import express from "express";
import { runPlanner } from "../agent/planner.js";
import { runGenerator } from "../agent/generator.js";
import { runExplainer } from "../agent/explainer.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { userPrompt, previousCode } = req.body;

  // Step 1: Planner
  const plan = await runPlanner(userPrompt, previousCode);

  // Step 2: Generator
  const code = await runGenerator(plan, previousCode);

  // Step 3: Explainer
  const explanation = await runExplainer(plan, code);

  res.json({ plan, code, explanation });
});

export default router;
