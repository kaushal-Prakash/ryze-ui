export function Table({ columns = [], data = [] }) {
  return (
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col} style={{ border: "1px solid #ddd", padding: "8px" }}>
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {columns.map((col) => (
              <td key={col} style={{ border: "1px solid #ddd", padding: "8px" }}>
                {row[col] || "-"}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}