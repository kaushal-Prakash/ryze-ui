export default function CodeEditor({ code, setCode }) {
  return (
    <div className="panel code-panel">
      <h3>Generated Code (Editable)</h3>
      <textarea value={code} onChange={(e) => setCode(e.target.value)} />
    </div>
  );
}
