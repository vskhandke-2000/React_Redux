import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState(0);
  const [percenatge1, setPercentage1] = useState(0);
  const [percenatge2, setPercentage2] = useState(0);

  //Derived State
  const tip = (bill * ((percenatge1 + percenatge2) / 2)) / 100;

  function handleReset() {
    setBill(0);
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage percenatge={percenatge1} onSelect={setPercentage1}>
        {" "}
        How did you like the service?{" "}
      </SelectPercentage>
      <SelectPercentage percenatge={percenatge2} onSelect={setPercentage2}>
        How did your friend like the service?
      </SelectPercentage>
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset handleReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label> How much was the Bill?</label>
      <input
        type="Number"
        placeholder="Bill Value"
        value={bill}
        onChange={(e) => onSetBill(+e.target.value)}
      />
    </div>
  );
}

function SelectPercentage({ children, percenatge, onSelect }) {
  return (
    <div>
      <label>{children}</label>
      <select value={percenatge} onChange={(e) => onSelect(+e.target.value)}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was Ok (5%)</option>
        <option value="10">It was Good (10%)</option>
        <option value="20">Amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <h3>
      You pay ${bill + tip} (${bill} + ${tip} Tip)
    </h3>
  );
}

function Reset({ handleReset }) {
  return <button onClick={handleReset}>Reset</button>;
}
