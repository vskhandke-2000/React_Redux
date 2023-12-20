import React from "react";
import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      {/* <Steps /> */}
      {/* Just comment out the code in index.css 
      for .close {} comment out position: absolute; */}
    </div>
  );
}

function Steps() {
  // const arr = useState(1);
  // console.log(arr);
  const [step, setStep] = useState(1);
  // console.log(step, setStep);

  // use of another piece of state
  const [isOpen, setIsOpen] = useState(true);
  // const [test] = useState({ name: "VK" });

  // const step = 1;
  const msg = `Step ${step}: ${messages[step - 1]}`;

  function handlePrevious() {
    if (step > 1) {
      // setStep(step - 1);
      // test.name = "VK"; // BAD Practice

      setStep((currStep) => currStep - 1);
    } else {
      alert("Steps reach at start! Press Next after reading current step!");
    }
  }
  function handleNext() {
    if (step < 3) {
      // setStep(step + 1);
      // // setStep(step + 1);

      setStep((currStep) => currStep + 1);
      // setStep((currStep) => currStep + 1);

      // test.name = "K"; // BAD Practice
    } else {
      alert("End of Step! Only 3 steps are there.");
    }
  }

  const sign = isOpen ? "-" : "+";

  return (
    <React.Fragment>
      {/* <button
        className="close"
        onClick={() => {
          // Updating State based on current state
          setIsOpen(!isOpen);
        }}
      >
        &times;
      </button> */}

      <button
        className="close"
        onClick={() => {
          // Updating state based on current state but using call back function.
          setIsOpen((currIsOpen) => !currIsOpen);
        }}
      >
        {sign}
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 && step < 4 ? "active" : ""}>1</div>
            <div className={step >= 2 && step < 4 ? "active" : ""}>2</div>
            <div className={step >= 3 && step < 4 ? "active" : ""}>3</div>
          </div>

          <p className="message">{step > 3 ? null : msg}</p>
          {/* <p className="message">{test.name}</p> */}

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
      )}
    </React.Fragment>
  );
}
