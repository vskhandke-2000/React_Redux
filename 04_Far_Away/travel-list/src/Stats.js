export default function Stats({ items }) {
  // if (!items.length) \\ Option of Early Return
  //   return (
  //     <p className="footer">
  //       <em>Start Adding some itemns to your PackingList!!</em>
  //     </p>
  //   );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 0 || isNaN(percentage)
          ? `💼 You have ${numItems} items on your List, Start Packing!!`
          : percentage === 100
          ? "You got EVERYTHING! Ready to go!! ✈️"
          : `💼 You have ${numItems} items on your List, and you already packed ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
