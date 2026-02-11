"use client";
import { useState } from "react";
import { Navbar } from "@/components/ui/Navbar";
import { Sidebar } from "@/components/ui/Sidebar";
import CodeEditor from "@/components/CodeEditor";
import PreviewPanel from "@/components/PreviewPanel";
import ChatPanel from "@/components/MainPanel";

export default function Page() {
  const [code, setCode] = useState("");
  const [versions, setVersions] = useState([]);

  async function handleGenerate(userPrompt) {
    const res = await fetch("http://localhost:5000/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userPrompt,
        previousCode: code
      })
    });

    const data = await res.json();

    // Save version
    setVersions([...versions, data.code]);

    // Update code
    setCode(data.code);
  }

  return (
    <div className="app-container">
      <Navbar />

      <div className="main-layout">
        <Sidebar />

        <div className="center-layout">
          <ChatPanel onSend={handleGenerate} />
          <CodeEditor code={code} setCode={setCode} />
          <PreviewPanel code={code} />
        </div>
      </div>
    </div>
  );
}
