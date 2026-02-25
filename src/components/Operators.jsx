function Operators({ activeOperator, onSelect }) {
  const operators = ["+", "-", "×", "÷"];

  return (
    <div>
      {operators.map((op) => (
        <button
          key={op}
          onClick={() => onSelect(op)}
          style={{
            backgroundColor: activeOperator === op ? "#4caf50" : "#ddd",
            fontWeight: activeOperator === op ? "bold" : "normal",
            margin: "0 5px"
          }}
        >
          {op}
        </button>
      ))}
    </div>
  );
}

export default Operators;