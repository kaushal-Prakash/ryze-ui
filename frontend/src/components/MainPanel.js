import { useState } from "react";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";

export default function ChatPanel({ onSend }) {
  const [message, setMessage] = useState("");

  return (
    <div className="panel chat-panel">
      <h3>AI Chat</h3>
      <Input
        placeholder="Describe your UI..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button label="Generate UI" onClick={() => onSend(message)} />
    </div>
  );
}
