import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//App component
function App() {
  const time = new Date().getHours();

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Menu</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-warning" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      <div className="margin">
        <div className="center">
          <h1 className="honk">THE BEAST'S LIST</h1>
          {time >= 10 && time < 22 && <p className="tagline">Authentic Italian Pizza</p>}
        </div>
        <div className="center" style={{ marginTop: 48 }}>
          {pizzaItems}
          <Footer />
        </div>
      </div>
    </div>
  )
}

//Pizza Component with Props
function Pizza({ name, descri, price, img }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <p style={{ fontWeight: "bold" }}>{name}</p>
      <img src={img} alt={name} style={{ width: 300, height: "auto", borderRadius: "50%", boxShadow: "0 0 10px white"}} />
      <p>{descri}</p>
      <p>${price}</p>
    </div>
  )
}

//Pizza Data in an Array
const pizzaData = [
  {
    name: "Pizza Avocado Chicken",
    photoName: "Pizza Images/a.png",
    ingredients: "Bread with avocado, and chicken.",
    price: "6.00",
    soldOut: false,
  },
  {
    name: "Pizza Braised Lamb",
    photoName: "Pizza Images/bl.png",
    ingredients: "Braised lamb",
    price: "10.00",
    soldOut: false,
  },
  {
    name: "Pizza Curry Chicken",
    photoName: "Pizza Images/cc.png",
    ingredients: "Curry chicken",
    price: "12.00",
    soldOut: false,
  },
  {
    name: "Pizza Hot Popcorn Chicken Fries",
    photoName: "Pizza Images/hp.png",
    ingredients: "Hot popcorn chicken, and fries",
    price: "12.00",
    soldOut: false,
  },
  {
    name: "Pizza Hot Wagyu",
    photoName: "Pizza Images/hw.png",
    ingredients: "Hot wagyu",
    price: "15.00",
    soldOut: true,
  },
  {
    name: "Pizza Pepper Scramble Egg",
    photoName: "Pizza Images/ps.png",
    ingredients: "Pepper scramble egg",
    price: "18.00",
    soldOut: false,
  },
  {
    name: "Pizza Shepherd's Pie",
    photoName: "Pizza Images/sp.png",
    ingredients: "Shepherd's pie",
    price: "18.00",
    soldOut: false,
  },
  {
    name: "Pizza Smoked Salmon",
    photoName: "Pizza Images/ss.png",
    ingredients: "Smoked Salmon",
    price: "18.00",
    soldOut: false,
  },
  {
    name: "Pizza Sweet Potato",
    photoName: "Pizza Images/sptt.png",
    ingredients: "Sweet potato",
    price: "18.00",
    soldOut: false,
  },
  {
    name: "Pizza Teriyaki Chicken",
    photoName: "Pizza Images/tc.png",
    ingredients: "Teriyaki Chicken",
    price: "18.00",
    soldOut: false,
  },
];

//loopping of pizza
const pizzaItems = pizzaData.map(pizza => (
  <Pizza
    name={pizza.name}
    descri={pizza.ingredients}
    price={pizza.price}
    img={pizza.photoName}
  />
));


//Footer Component 
function Footer() {
  const time = new Date().getHours();

  return (time >= 10 && time < 22 ?
    <Order />
    :
    <p>Sorry, we're closed</p>
  )
}

//Order Component
function Order() {
  return (
    <div>
      <p>We're currently open</p>
      <button className="button">Order</button>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)

// Reference: OpenAI. (2025). ChatGPT (GPT-5.1) [Large language model]. https://chat.openai.com/
