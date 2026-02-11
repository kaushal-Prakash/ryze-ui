export function Input({ placeholder, value, onChange }) {
  return (
    <input
      style={{ width: "100%", padding: "8px", marginBottom: "8px" }}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}