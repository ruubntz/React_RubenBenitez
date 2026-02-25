function Display({ a, b, operator, result }) {
  if (!operator) {
    return <p>Selecciona una operación</p>;
  }
  if (a === null || b === null) {
    return <p>Introduce ambos números para realizar la cuenta</p>;
  }

  return (
    <p>
      {a} {operator} {b} = <strong>{result}</strong>
    </p>
  );
}

export default Display;