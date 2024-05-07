import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const burgerData = [
  {
    name: "Chesseburger",
    ingredients: "Ground beef, Chesse, Ketchup, Mustard, Pickles",
    price: "4 euro",
    photoName: "burgers/Chesseburger.jpg",
    soldOut: false,
  },
  {
    name: "Hamburger",
    ingredients: "Ground beef, Ketchup, Mustard, Pickles",
    price: "3 euro",
    photoName: "burgers/Hamburger.jpg",
    soldOut: false,
  },
  {
    name: "Kingsbeef",
    ingredients: "Gourmet, Roucola salat, Tomato, Chesse, Pickles ",
    price: "10 euro",
    photoName: "burgers/Kingsbeef.jpg",
    soldOut: false,
  },
  {
    name: "Long-Chicken",
    ingredients: "Mayonnaise, Long-Chicken patty, Salat",
    price: "7 euro",
    photoName: "burgers/Longchicken.jpg",
    soldOut: false,
  },
  {
    name: "Nugget Burger",
    ingredients: "Mayonnaise, Nuggets, Curry sauce",
    price: "5 euro",
    photoName: "burgers/Nugget.jpg",
    soldOut: true,
  },
  {
    name: "Whopper",
    ingredients: "Mayonnaise, Beef, Tomato, Salat, Pickles, Ketchup",
    price: "9 euro",
    photoName: "burgers/Whopper.jpg",
    soldOut: false,
  },
];

function App() {
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
    <header className="header">
      <h1>Indu Burger Co.</h1>
    </header>
  );
}

function Menu() {
  const burgers = burgerData;
  //const burgers = []; // if all the burgers sold out
  const numBurgers = burgers.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numBurgers > 0 ? (
        <>
          <p>
            Welcome to our burger heaven, where every bite is a celebration of
            flavor! Dive into a world of succulent patties, fresh veggies, and
            melted cheese, all nestled between pillowy buns. With each order, we
            craft culinary masterpieces that redefine the art of burger-making.{" "}
          </p>

          <ul className="burgers">
            {burgers.map((burger) => (
              <Burger burgerObj={burger} key={burger.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>
          Hi, we're still working on our menu. Please come back later. Thank
          you!
        </p>
      )}

      {/* <Burger
        name="Chesseburger"
        ingredients="Ground beef, Chesse, Ketchup, Mustard, Pickles"
        photoName="burgers/Chesseburger.jpg"
        price={9}
      />
      <Burger
        name="Hamburger"
        ingredients="Ground beef, Ketchup, Mustard, Pickles"
        price={8}
        photoName="burgers/Hamburger.jpg"
  />*/}
    </main>
  );
}

function Burger({ burgerObj }) {
  console.log(burgerObj);

  //if (burgerObj.soldOut) return null;

  return (
    <li className={`burger ${burgerObj.soldOut ? "sold-out" : ""}`}>
      <img src={burgerObj.photoName} alt={burgerObj.name}></img>
      <div>
        <h3>{burgerObj.name}</h3>
        <p>{burgerObj.ingredients}</p>
        <span>{burgerObj.soldOut ? "SOLD OUT" : burgerObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 24;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Visit us or Order
        online.
      </p>
      <button className="btn">Order Now</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
