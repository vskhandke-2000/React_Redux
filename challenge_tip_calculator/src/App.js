import "./styles.css";

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  return (
    <div>
      <form>
        <p>How much was the bill?</p>
        <span>
          <input type="number" />
        </span>
      </form>
    </div>
  );
}
