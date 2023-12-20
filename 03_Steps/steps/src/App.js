const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const step = 1;
  const msg = `Step ${step}: ${messages[step - 1]}`;

  function handlePrevious() {
    // alert("Previous");
  }
  function handleNext() {
    // alert("Next");
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
