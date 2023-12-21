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
  const [buttonExist, setButtonExist] = useState(true);

  const isPositiveStep = step > 0;

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleReset() {
    setStep(1);
    setCount(0);
    setButtonExist(false);
  }

  return (
    <div>
      <div>
        <input
          type="range"
          min={1}
          max={10}
          value={step}
          // onChange={(e) => setStep(+e.target.value)} // + also works to convert String to Number
          onChange={(e) => {
            setStep(Number(e.target.value));
            setButtonExist(true);
          }}
        />
        <span>Step: {step}</span>
      </div>
      {isPositiveStep ? (
        <div>
          <button
            onClick={() => {
              setCount((currCount) => currCount - step);
              setButtonExist(true);
            }}
          >
            -
          </button>
          {/* <span>Count: {count}</span> */}
          <input
            type="text"
            value={count}
            onChange={(e) => {
              setCount(+e.target.value);
              setButtonExist(true);
            }}
          />
          <button
            onClick={() => {
              setCount((currCount) => currCount + step);
              setButtonExist(true);
            }}
          >
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
      <div>{buttonExist && <button onClick={handleReset}>Reset</button>}</div>
    </div>
  );
}
