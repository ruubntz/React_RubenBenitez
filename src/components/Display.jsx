function Display({ a, b, operator, result }) {
  const containerStyle = {
    background: "#1f1b2e",
    borderRadius: "14px",
    padding: "1rem",
    marginTop: "1rem",
    textAlign: "center",
    color: "#ffffff",
    boxShadow: "0 6px 15px rgba(0,0,0,0.35)",
  };

  const hintStyle = {
    color: "#a89bff",
    fontSize: "0.95rem",
  };

  const expressionStyle = {
    fontSize: "1rem",
    marginBottom: "0.4rem",
    color: "#a89bff",
  };

  const resultStyle = {
    fontSize: "1.4rem",
    color: "#6f5cff",
  };

  // Si a o b están vacíos
  if (!a || !b) {
    return (
      <div style={containerStyle}>
        <div style={hintStyle}>Seleccione una opción</div>
      </div>
    );
  }

  // Si no hay operador
  if (!operator) {
    return (
      <div style={containerStyle}>
        <div style={hintStyle}>Selecciona una operación</div>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <div style={expressionStyle}>
        {a} {operator} {b}
      </div>
      <div style={resultStyle}>
        = <strong>{result}</strong>
      </div>
    </div>
  );
}

export default Display;