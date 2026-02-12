import React from "react";
import * as UI from "./ui";

export default function PreviewPanel({ code }) {
  try {
    const Component = new Function(
      "React",
      "UI",
      `return () => React.createElement(React.Fragment, null, ${code});`
    )(React, UI);

    return (
      <div className="panel preview-panel">
        <h3>Live Preview</h3>
        <Component />
      </div>
    );
  } catch (err) {
    return (
      <div className="panel preview-panel">
        <h3>Live Preview</h3>
        <p style={{ color: "red" }}>Render Error: {err.message}</p>
      </div>
    );
  }
}
