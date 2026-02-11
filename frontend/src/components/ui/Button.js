export function Button({ label, variant = "primary", onClick }) {
  const styles =
    variant === "primary"
      ? { background: "#2563eb", color: "white" }
      : { background: "#e5e7eb", color: "black" };

  return (
    <button
      style={{ padding: "8px 12px", borderRadius: "6px", border: "none", ...styles }}
      onClick={onClick}
    >
      {label}
    </button>
  );
}