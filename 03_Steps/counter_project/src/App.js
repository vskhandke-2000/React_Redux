import { useState } from "react";

export default function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const isPositiveStep = step > 0;

  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <div>
      <div>
        <button onClick={() => setStep((currStep) => currStep - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((currStep) => currStep + 1)}>+</button>
      </div>
      {isPositiveStep ? (
        <div>
          <button onClick={() => setCount((currCount) => currCount - step)}>
            -
          </button>
          <span>Count: {count}</span>
          <button onClick={() => setCount((currCount) => currCount + step)}>
            +
          </button>
        </div>
      ) : (
        alert("Don't try to enter Negative step")
      )}
      {/* {console.log(`Step: ${step}; Count: ${count}`)} */}
      <div>
        {/* {count < -1 && (
          <p>
            {count * -1} Days before Today was {date.toDateString()}
          </p>
        )}
        {count === -1 && (
          <p>
            {count * -1} Day before Today was {date.toDateString()}
          </p>
        )}
        {count === 0 && <p>Today is {date.toDateString()}</p>}

        {count > 1 && (
          <p>
            {count} Days after Today will be {date.toDateString()}
          </p>
        )}
        {count === 1 && (
          <p>
            {count} Day after Today will be {date.toDateString()}
          </p>
        )} */}

        <p>
          <span>
            {count === 0
              ? "Today is "
              : count > 0
              ? `${count} Days from today will be `
              : `${Math.abs(count)} Days ago was `}
          </span>
          <span>{date.toDateString()}</span>
        </p>
      </div>
    </div>
  );
}
