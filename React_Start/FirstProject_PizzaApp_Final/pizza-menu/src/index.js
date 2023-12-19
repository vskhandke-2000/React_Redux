// Entry Point in React

import React from "react";
import ReactDOM from "react-dom/client";

// Create App Component

function App() {
  //   const x = "Jonas"; // EsLint gives warning
  return <h1>Hello React!</h1>;
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
// Activating Strict Mode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React before 18
// React.render(<App />);
