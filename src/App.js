import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridGap: '15px',
  padding: '20px'
}

function App() {
  const titleStyle = {
    color: 'red',
    background: 'yellow',
    padding: '5px 15px',
    textTransform: 'uppercase',
    borderRadius: '2px',
    boxShadow: '5px 5px rgba(255,255,255,.3)'
  }

  const persons = ['Rijwan', 'Mahim', 'Kafi', 'Sojol']
  let year = 2021;

  const products = [
    { name: 'Photshop', price: '$99.99' },
    { name: 'Illustrator', price: '$60.99' }
  ]

  return (
    <div className="App">
      <header className="App-header">
        <p style={titleStyle}>I am a react Person</p>
        <img className="App-logo" src={logo} alt="" />
        {/* Counter */}
        <Counter />
        {/* Person Cards */}
        <div className="persons" style={gridStyle}>
          <Person name={persons[0]} year={year++} />
          <Person name={persons[1]} year={year++} />
          <Person name={persons[2]} year={year++} />
          <Person name={persons[3]} year={year++} />
          <Person name={persons[4] || 'Sanjidul'} year={year++} />
          <Person name={persons[5] || 'Shamim'} year={year++} />
        </div>

        {/* Product Cards */}
        <div className="products" style={gridStyle}>
          <Product name={products[0].name} price={products[0].price} />
          <Product name={products[1].name} price={products[1].price} />
          <Product name="XD" price="$50.99" />
          <Product name="Lightroom" price="$75.99" />
        </div>

        {/* Dynamic List */}
        <ul>
          {
            persons.map((person, ind) => <li>{person} : {2021 + ind}</li>)
          }
          {
            products.map(product => <li>{product.name} : {product.price}</li>)
          }
        </ul>
        {/* Users */}
        <Users />
      </header>
    </div>
  );
}

// Person
function Person(props) {
  // console.log(props);

  return (
    <div style={{
      background: '#333',
      padding: '10px 25px',
      borderRadius: '5px'
    }}>
      <h2>Name: {props.name}</h2>
      <h3>Student of the year {props.year}</h3>
    </div>
  )
}

const productStyle = {
  border: '2px solid #222',
  borderRadius: '5px',
  background: '#333',
  padding: '20px',
  marginBottom: '10px'
}

const buttonStyle = {
  border: '0',
  background: '#222',
  color: '#fff',
  fontSize: '18px',
  fontWeight: '600',
  padding: '12px 30px',
  borderRadius: '50px',
  cursor: 'pointer',
  outline: 0,
  margin: '0 3px'
}

// Product
function Product(props) {
  // console.log(props);

  return (
    <div style={productStyle}>
      <h2>Name: {props.name}</h2>
      <h3>Price: {props.price}</h3>
      <button style={buttonStyle}>Buy now</button>
    </div>
  )
}

// Counter
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count} hit</h2>
      <button onClick={() => setCount(count - 1)} style={buttonStyle}>Decrease -</button>
      <button onClick={() => setCount(count + 1)} style={buttonStyle}>Increse +</button>
    </div>
  )
}

// Users
function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <div>
      <h2>Dynamic Users</h2>
      <div style={gridStyle}>
        {
          users.map(user=> {
            return (
              <div style={productStyle}>
                <h4>{user.name}</h4>
                <h5>{user.email}</h5>
                <p>{user.website}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default App;
