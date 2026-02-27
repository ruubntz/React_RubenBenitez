function Operators({ activeOperator, onSelect, theme }) {
  const operators = ["+", "-", "×", "÷"];

  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "1rem",
    gap: "0.5rem",
  };

  const buttonBaseStyle = {
    flex: 1,
    padding: "0.6rem 0",
    fontSize: "1.1rem",
    borderRadius: "10px",
    border: "none",
    color: "#ffffff",
    cursor: "pointer",
    transition: "background 0.2s ease",
  };

  return (
    <div style={containerStyle}>
      {operators.map((op) => (
        <button
          key={op}
          onClick={() => onSelect(op)}
          style={{
            ...buttonBaseStyle,
            background:
              activeOperator === op
                ? theme.primaryHover
                : theme.primary,
          }}
        >
          {op}
        </button>
      ))}
    </div>
  );
}

export default Operators;