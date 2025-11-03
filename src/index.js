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

//A function that returns the pizza items
function Pizza() {
  //A list that contains all the pizza details
  const pizzas = [
    {
      pic: "/Pizza Images/Avocado Chicken Pizza.png",
      name: "Avocado Chicken Pizza",
      ingredients: "Avocado, chicken and cheese.",
      price: "$16.00"
    },
    {
      pic: "/Pizza Images/Braised Lamb Pizza.png",
      name: "Braised Lamb Pizza",
      ingredients: "Braised lamb and cheese.",
      price: "$17.00"

    },
    {
      pic: "/Pizza Images/Curry Chicken Pizza.png",
      name: "Curry Chicken Pizza",
      ingredients: "Curry chicken and cheese.",
      price: "$15.00"
    },
    {
      pic: "/Pizza Images/Hot Popcorn Chicken Fries Pizza.png",
      name: "Hot Popcorn Chicken Fries Pizza",
      ingredients: "Spicy popcorn chicken, french fries and cheese.",
      price: "$15.00"
    },
    {
      pic: "/Pizza Images/Hot Wagyu Pizza.png",
      name: "Hot Wagyu Pizza",
      ingredients: "Spicy wagyu beef and cheese.",
      price: "$25.00"
    },
    {
      pic: "/Pizza Images/Pepper Scramble Egg Pizza.png",
      name: "Black Pepper Scramble Egg Pizza",
      ingredients: "Black pepper scramble egg and cheese.",
      price: "$15.00"
    },
    {
      pic: "/Pizza Images/Shepherd's Pie Pizza.png",
      name: "Shepherd's Pie Pizza",
      ingredients: "Potato, carrot, corn, green pea, beef, and cheese.",
      price: "$20.00"
    },
    {
      pic: "/Pizza Images/Smoked Salmon Pizza.png",
      name: "Smoked Salmon Pizza",
      ingredients: "Smoked salmon and cheese.",
      price: "$25.00"
    },
    {
      pic: "/Pizza Images/Sweet Potato Pizza.png",
      name: "Sweet Potato Pizza",
      ingredients: "Sweet potato and cheese.",
      price: "$15.00"
    },
    {
      pic: "/Pizza Images/Teriyaki Chicken Pizza.png",
      name: "Teriyaki Chicken Pizza",
      ingredients: "Teriyaki chicken and cheese.",
      price: "$15.00"
    },
  ];

  //A list that stores the pizza HTML
  const items = [];

  //Looping of the pizza details
  for (let i = 0; i < pizzas.length; i++) {
    //Picks one pizza from the list each time
    const p = pizzas[i];

    //Creating the HTML block and stores it in the "items" list
    items.push(
      <div className="pizzas">
        <img src={p.pic} alt={p.name} />
        <p><b>{p.name}</b></p>
        <p>{p.ingredients}</p>
        <p>{p.price}</p><br /><br /><br />
      </div>
    )
  }

  return (<div>{items}</div>)
}

function Menu() {
  return (
    <div className="menu">
      <h2>
        Our Menu
      </h2>
      <Pizza />
      <Pizza />
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