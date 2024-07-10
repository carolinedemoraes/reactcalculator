import { useState } from "react";
import "./App.css";
import { Button } from "./components/buttons/Button";

function App() {
  const [firstNumber, setFirstNumber] = useState("");
  const [operator, setOperator] = useState("");
  const [secondNumber, setSecondNumber] = useState("");

  function addNumber(n) {
    let num = firstNumber + n;
    setFirstNumber(num);
  }

  function count(operator) {
    if (firstNumber != "" && secondNumber != "") {
      if (operator === "/") {
        setSecondNumber(parseFloat(secondNumber) / parseFloat(firstNumber));
      } else if (operator === "*") {
        setSecondNumber(parseFloat(secondNumber) * parseFloat(firstNumber));
      } else if (operator === "-") {
        setSecondNumber(parseFloat(secondNumber) - parseFloat(firstNumber));
      } else if (operator === "+") {
        setSecondNumber(parseFloat(secondNumber) + parseFloat(firstNumber));
      }
      setOperator(operator);
      setFirstNumber("");
    } else {
      setOperator(operator);
      setSecondNumber(firstNumber);
      setFirstNumber("");
    }
  }

  function result() {
    if (firstNumber != "" && secondNumber != "" && operator != "=") {
      if (operator === "/") {
        setFirstNumber(parseFloat(secondNumber) / parseFloat(firstNumber));
      } else if (operator === "*") {
        setFirstNumber(parseFloat(secondNumber) * parseFloat(firstNumber));
      } else if (operator === "-") {
        setFirstNumber(parseFloat(secondNumber) - parseFloat(firstNumber));
      } else if (operator === "+") {
        setFirstNumber(parseFloat(secondNumber) + parseFloat(firstNumber));
      }
      setSecondNumber("");
      setOperator("=");
    }
  }

  function clean() {
    setFirstNumber("");
  }

  function cleanEverything() {
    setFirstNumber("");
    setSecondNumber("");
    setOperator("");
  }

  function percent() {
    let percentage = (parseFloat(firstNumber) / 100) * parseFloat(secondNumber);
    setFirstNumber(percentage);
  }

  function addDot() {
    if (firstNumber === "") {
      setFirstNumber("0.");
    } else if (!firstNumber.includes(".")) {
      let num = firstNumber + ".";
      setFirstNumber(num);
    }
  }

  return (
    <div className="content">
      <div className="calculator">
        <div className="header">
          <p className="equation"> {secondNumber}</p>
          <p className="solution">
            {operator} {firstNumber}
          </p>
        </div>

        <div className="buttons">
          <div className="lines">
            <Button text={"CE"} onClick={() => cleanEverything("")} />
            <Button text={"C"} onClick={() => clean("")} />
            <Button text={"%"} onClick={() => percent()} />
            <Button text={"/"} onClick={() => count("/")} />
          </div>
          <div className="lines">
            <Button text={"7"} onClick={() => addNumber(7)} />
            <Button text={"8"} onClick={() => addNumber(8)} />
            <Button text={"9"} onClick={() => addNumber(9)} />
            <Button text={"x"} onClick={() => count("*")} />
          </div>
          <div className="lines">
            <Button text={"4"} onClick={() => addNumber(4)} />
            <Button text={"5"} onClick={() => addNumber(5)} />
            <Button text={"6"} onClick={() => addNumber(6)} />
            <Button text={"-"} onClick={() => count("-")} />
          </div>
          <div className="lines">
            <Button text={"1"} onClick={() => addNumber(1)} />
            <Button text={"2"} onClick={() => addNumber(2)} />
            <Button text={"3"} onClick={() => addNumber(3)} />
            <Button text={"+"} onClick={() => count("+")} />
          </div>
          <div className="lines">
            <Button text={"0"} onClick={() => addNumber(0)} />
            <Button text={"."} onClick={() => addDot()} />
            <Button text={"="} onClick={() => result("")} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
