import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

//A function that returns the header and pizza items
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

//A function that returns the header
function Header() {
  return (
    <header className="header">
      <h1 style={{ color: "orange", fontSize: "48px", textTransform: "uppercase" }}>Beast's List</h1>
    </header>
  )
}

//A function that returns the pizza
function Pizza({image, name, description, price}) {
  return (
    <div>
      <img src={image} alt={name} />
      <p>{name}</p>
      <p>{description}</p>
      <p>${price}</p>
    </div>
  )
}

function Menu() {
  return (
    <div className="menu">
      <h2>
        Our Menu
      </h2>
      <Pizza image="/Pizza Images/Avocado Chicken Pizza.png" name="Avocado Chicken Pizza" description="Avocado, chicken, and cheese." price="15.00" />
      <Pizza image="/Pizza Images/Braised Lamb Pizza.png" name="Braised Lamb Pizza" description="Braised Lamb" price="15.00" />
    </div>
  )
}

function Footer() {
  const hour = new Date().getHours(); //Get the current hour
  const isOpen = hour >= 10 && hour < 22;

  return (
    <footer className="footer">
      {isOpen ? "We’re currently open." : "Sorry we’re closed."}
    </footer>
  );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

//Reference: OpenAI. (2025). ChatGPT (GPT-5) [Large language model]. https://chat.openai.com/
