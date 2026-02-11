import * as UI from "./ui";

export default function PreviewPanel({ code }) {
  let RenderedUI = () => null;

  try {
    // Very simple live preview evaluator (safe-ish for demo)
    RenderedUI = new Function("UI", `return () => <>${code}</>;`)(UI);
  } catch (err) {
    return (
      <div className="panel preview-panel">
        <h3>Live Preview</h3>
        <p style={{ color: "red" }}>Render Error: {err.message}</p>
      </div>
    );
  }

  return (
    <div className="panel preview-panel">
      <h3>Live Preview</h3>
      <RenderedUI />
    </div>
  );
}
