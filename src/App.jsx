import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [result, setResult] = useState("");

  function calculate(operator) {
    if (firstNumber === "" || secondNumber === "") {
      setResult("Please enter both numbers.");
      return;
    }

    const a = Number(firstNumber);
    const b = Number(secondNumber);

    switch (operator) {
      case "+":
        setResult(a + b);
        break;
      case "-":
        setResult(a - b);
        break;
      case "*":
        setResult(a * b);
        break;
      case "/":
        setResult(b === 0 ? "Cannot divide by zero." : a / b);
        break;
      default:
        setResult("");
    }
  }

  return (
    <main className="app">
      <h1>Counter and Calculator</h1>

      <section className="card">
        <h2>Counter</h2>
        <p className="count">{count}</p>

        <div className="button-row">
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <button onClick={() => setCount(count - 1)}>Decrement</button>
          <button className="secondary" onClick={() => setCount(0)}>
            Reset
          </button>
        </div>
      </section>

      <section className="card">
        <h2>Two-Number Calculator</h2>

        <div className="inputs">
          <input
            type="number"
            value={firstNumber}
            onChange={(event) => setFirstNumber(event.target.value)}
            placeholder="First number"
          />
          <input
            type="number"
            value={secondNumber}
            onChange={(event) => setSecondNumber(event.target.value)}
            placeholder="Second number"
          />
        </div>

        <div className="button-row">
          <button onClick={() => calculate("+")}>+</button>
          <button onClick={() => calculate("-")}>−</button>
          <button onClick={() => calculate("*")}>×</button>
          <button onClick={() => calculate("/")}>÷</button>
        </div>

        <p className="result">
          Result: <strong>{result === "" ? "—" : result}</strong>
        </p>
      </section>
    </main>
  );
}

export default App;