import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={5} />
    <StarRating
      maxRating={5}
      size={64}
      color="#00F"
      strokeColor="#F00"
      className="test"
    />
    <StarRating
      maxRating={5}
      size={64}
      color="#00F"
      strokeColor="#F00"
      className="test"
      msg={["Terrible", "Bad", "Good", "Great", "Awesome"]}
    /> */}
  </React.StrictMode>
);
