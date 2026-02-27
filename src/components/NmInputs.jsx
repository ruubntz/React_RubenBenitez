function NmInputs({ a, b, onChangeA, onChangeB, theme }) {
  
  const inputStyle = {
    background: "#1f1b2e",
    color: theme.text,
    border: "none",
    borderRadius: theme.radius,
    marginBottom: "0.75rem",
    padding: "0.5rem"
  };
  
  return (
    <div>
      <input
        type="number"
        style = {inputStyle}
        value={a}
        onChange={(e) => onChangeA(e.target.value)}
        placeholder="A"
      />
      <input
        type="number"
        style={inputStyle}
        value={b}
        onChange={(e) => onChangeB(e.target.value)}
        placeholder="B"
      />
    </div>
  );
}

export default NmInputs;