import { useEffect, useState } from "react";
import NmInputs from "./components/NmInputs";
import Operators from "./components/Operators";
import Display from "./components/Display";
import { Container, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const STORAGE_KEY = "calculatorState";

function App() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [operator, setOperator] = useState(null);

  const theme = {
    background: "#1f1b2e",
    card: "#2b2442",
    primary: "#6f5cff",
    primaryHover: "#5b4de0",
    muted: "#a89bff",
    text: "#ffffff",
    radius: "16px",
  };

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
    <div style={{ background: theme.background, minHeight: "100vh", minWidth: "100vw" }}>
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <Card
          style={{
            
            background: theme.card,
            color: theme.text,
            borderRadius: theme.radius,
            border: "none",
            boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
            padding: "1.5rem",
          }}
        >
          <h3 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
            Calculadora
          </h3>

          <NmInputs
            a={a}
            b={b}
            onChangeA={setA}
            onChangeB={setB}
            theme={theme}
          />

          <Operators
            activeOperator={operator}
            onSelect={setOperator}
            theme={theme}
          />

          <Display
            a={a}
            b={b}
            operator={operator}
            result={calculate()}
            theme={theme}
          />
        </Card>
      </Container>
    </div>
  );
}

export default App;