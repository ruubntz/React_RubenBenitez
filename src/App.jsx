import { useEffect, useState } from "react";
import NumInputs from "./components/NumInputs";
import Operators from "./components/Operators";
import Display from "./components/Display";

const STORAGE_KEY = "calculatorState";

function App() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [operator, setOperator] = useState(null);

  useEffect(() => {
    const savedState = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedState) {
      setA(savedState.a);
      setB(savedState.b);
      setOperator(savedState.operator);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ a, b, operator })
    );
  }, [a, b, operator]);

  const calculate = () => {

    const numA = Number(a);
    const numB = Number(b);
    if(a === "" || b === "" || !operator) return "";
    switch (operator) {
      case "+": return numA + numB;
      case "-": return numA - numB;
      case "×": return numA * numB;
      case "÷": return numB !== 0 ? numA / numB : "Error";
      default: return 0;
    }
  };

  return (
    <div>
      <h1>Calculadora React</h1>

      <NumInputs
        a={a}
        b={b}
        onChangeA={setA}
        onChangeB={setB}
      />

      <Operators
        activeOperator={operator}
        onSelect={setOperator}
      />

      <Display
        a={a}
        b={b}
        operator={operator}
        result={calculate()}
      />
    </div>
  );
}

export default App;