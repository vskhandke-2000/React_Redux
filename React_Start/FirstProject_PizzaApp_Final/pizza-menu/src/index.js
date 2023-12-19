// Entry Point in React

import React from "react";
import ReactDOM from "react-dom/client";

// const pizzaData = [
//   {
//     name: "Focaccia",
//     ingredients: "Bread with italian olive oil and rosemary",
//     price: 6,
//     photoName: "pizzas/focaccia.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Margherita",
//     ingredients: "Tomato and mozarella",
//     price: 10,
//     photoName: "pizzas/margherita.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Spinaci",
//     ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
//     price: 12,
//     photoName: "pizzas/spinaci.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Funghi",
//     ingredients: "Tomato, mozarella, mushrooms, and onion",
//     price: 12,
//     photoName: "pizzas/funghi.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Salamino",
//     ingredients: "Tomato, mozarella, and pepperoni",
//     price: 15,
//     photoName: "pizzas/salamino.jpg",
//     soldOut: true,
//   },
//   {
//     name: "Pizza Prosciutto",
//     ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
//     price: 18,
//     photoName: "pizzas/prosciutto.jpg",
//     soldOut: false,
//   },
// ];

function Header() {
  return (
    <header>
      <h1>Pizza Corner</h1>
      <h3>Pizza Menu</h3>
    </header>
  );
}

function Menu() {
  return (
    <div>
      <p>Today's Special</p>
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  // console.log(hour);
  const openHour = 9;
  const closeHour = 21;
  const isOpen = hour >= openHour && hour <= closeHour;
  // if (hour >= openHour && hour <= closeHour) alert("We're Currently Open!!");
  // else {
  //   alert("Sorry we're out of service!");
  // }
  return (
    <footer>
      <p>We're Open from 9 AM to 9 PM © 2023 Pizza Corner</p>
    </footer>
  );
}

// Create App Component
function App() {
  //   const x = "Jonas"; // EsLint gives warning
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

// Pizza Component
function Pizza() {
  return (
    <div className="pizza">
      <img src="pizzas/focaccia.jpg" alt="Focaccia" />
      <h2>Pizza Focaccia</h2>
      <p>Bread with italian olive oil and rosemary</p>
    </div>
  );
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
