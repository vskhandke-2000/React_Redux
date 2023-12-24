import { useState } from "react";

export default function Form(props) {
  const [description, setDescription] = useState("");

  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(e);

    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    // console.log(newItem);
    props.onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }
  return (
    // SyntheticBaseEvent
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you want in your Bag for 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item.."
        value={description}
        onChange={(e) => {
          // console.log(e.target);
          // console.log(e.target.value);
          setDescription(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
}
