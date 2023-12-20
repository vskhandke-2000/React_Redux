import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  // const arr = useState(1);
  // console.log(arr);
  const [step, setStep] = useState(1);
  // console.log(step, setStep);

  // const step = 1;
  const msg = `Step ${step}: ${messages[step - 1]}`;

  function handlePrevious() {
    if (step > 1) {
      setStep(step - 1);
    } else {
      alert("Steps reach at start! Press Next after reading current step!");
    }
  }
  function handleNext() {
    if (step < 3) {
      setStep(step + 1);
    } else {
      alert("End of Step! Only 3 steps are there.");
    }
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 && step < 4 ? "active" : ""} `}>1</div>
        <div className={`${step >= 2 && step < 4 ? "active" : ""} `}>2</div>
        <div className={`${step >= 3 && step < 4 ? "active" : ""} `}>3</div>
      </div>

      <p className="message">{step > 3 ? null : msg}</p>

      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          // onClick={() => alert('Previous')}
          // onClick={alert("Test")}
          // onClick={handlePrevious()}
          // onClick={() => handlePrevious()}
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
