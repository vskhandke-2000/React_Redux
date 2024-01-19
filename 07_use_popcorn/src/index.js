import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { useState } from "react";
import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>This movie rated {movieRating} Stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <StarRating maxRating={5} />
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
    />
    <StarRating
      maxRating={5}
      size={64}
      color="#00F"
      strokeColor="#F00"
      className="test"
      msg={["Terrible", "Bad", "Good", "Great", "Awesome"]}
      defaultRating={3}
    />
    <Test />
  </React.StrictMode>
);
