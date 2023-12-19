// Entry Point in React

import React from "react";
import ReactDOM from "react-dom/client";

// css file import
import "./index.css";

const pizzaData = [
  {
    name: "Pizza Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

// Create App Component
function App() {
  //   const x = "Jonas"; // EsLint gives warning
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header footer">
      <h1>Pizza Corner</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Today's Special</h2>
      {/* <Pizza
        name={pizzaData[0].name}
        ingredients={pizzaData[0].ingredients}
        photoName={pizzaData[0].photoName}
        price={pizzaData[0].price}
        outOfStock={pizzaData[0].soldOut}
      />
      <Pizza
        name={pizzaData[1].name}
        ingredients={pizzaData[1].ingredients}
        photoName={pizzaData[1].photoName}
        price={pizzaData[1].price}
        outOfStock={pizzaData[1].soldOut}
      />
      <Pizza
        name={pizzaData[2].name}
        ingredients={pizzaData[2].ingredients}
        photoName={pizzaData[2].photoName}
        price={pizzaData[2].price}
        outOfStock={pizzaData[2].soldOut}
      />
      <Pizza
        name={pizzaData[3].name}
        ingredients={pizzaData[3].ingredients}
        photoName={pizzaData[3].photoName}
        price={pizzaData[3].price}
        outOfStock={pizzaData[3].soldOut}
      />
      <Pizza
        name={pizzaData[4].name}
        ingredients={pizzaData[4].ingredients}
        photoName={pizzaData[4].photoName}
        price={pizzaData[4].price}
        outOfStock={pizzaData[4].soldOut}
      />
      <Pizza
        name={pizzaData[5].name}
        ingredients={pizzaData[5].ingredients}
        photoName={pizzaData[5].photoName}
        price={pizzaData[5].price}
        outOfStock={pizzaData[5].soldOut} 
      /> */}

      {/* <div>
        {pizzaData.map((pizza) => (
          <Pizza
            name={pizza.name}
            photoName={pizza.photoName}
            ingredients={pizza.ingredients}
            price={pizza.price}
          />
        ))}
      </div> */}

      {/* <div>
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} />
        ))}
      </div>
      {/* Warning: Each child in a list should have a unique "key" prop. */}

      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ))}
      </ul>
    </main>
  );
}

function Footer() {
  const day = new Date().toDateString();
  const hour = new Date().getHours();
  // console.log(hour);
  const openHour = 9;
  const closeHour = 20;
  const isOpen = hour >= openHour && hour <= closeHour;
  // console.log(isOpen);
  // if (hour >= openHour && hour <= closeHour) alert("We're Currently Open!!");
  // else {
  //   alert("Sorry we're out of service!");f
  // }
  return (
    <footer className="footer">
      <p style={{ textAlign: "center" }}>Date: {day}</p>
      {isOpen && (
        <div className="order">
          <p style={{ color: "green", backgroundColor: "cyan" }}>
            We're Open for Your Orders until {closeHour}:00; Come visit us or
            Order Online!
          </p>
          <button className="btn">Order Now</button>
        </div>
      )}
      {!isOpen && (
        <p style={{ color: "lightred", backgroundColor: "lightgrey" }}>
          We're <span style={{ color: "red" }}>UNAVAILABLE</span> for your
          Order.
        </p>
      )}
      <br />
      <p style={{ textAlign: "center" }}>© 2023 Pizza Corner</p>
    </footer>
  );
}

// Pizza Component
// Use Props
function Pizza(props) {
  // console.log(props);
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h2>{props.pizzaObj.name}</h2>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price}</span>
      </div>
    </li>
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
