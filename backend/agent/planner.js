export async function runPlanner(userPrompt, previousCode) {
  // Later: call LLM here
  return {
    layout: "column",
    components: [
      { type: "Card", props: { title: "Dashboard" } },
      { type: "Button", props: { label: "Settings" } }
    ]
  };
}
