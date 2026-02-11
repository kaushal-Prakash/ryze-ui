export function Modal({ isOpen, title, children, onClose }) {
  if (!isOpen) return null;

  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0,
      width: "100%", height: "100%",
      background: "rgba(0,0,0,0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <div style={{ background: "white", padding: "16px", borderRadius: "8px", width: "300px" }}>
        <h3>{title}</h3>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}