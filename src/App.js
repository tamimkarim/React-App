import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const actors =['Amir Khan', 'Salman Khan', 'Shahrukh Khan', 'Justin Flynn', 'Rock']
  const products =[
    {name : 'Photoshop', price: '$90.99'},
    {name: 'Illustrator', price: '$50'},
    {name: 'PDF Reader' , price: '$6.99'}
]
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            // actors.map(actor => <li>{actor}</li>)
            actors.map(actor => <li>{actor}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
          {
            products.map(pd => <Product product ={pd}></Product>)

          }
        </ul>
        <Product name={products[0].name} price={products[0].price}></Product>
        <Product name ={products[1].name} price={products[1].price}></Product>
      </header>
    </div>
  );
}
 function Counter() {
   const [count, setCount ] = useState(10);
   const handleIncrease =() =>  setCount(count + 1);
   return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick ={() =>  setCount(count + 1)}>Increase</button>
      <button onClick ={() => setCount(count -1)}>Decrease</button>
      
    </div>

   )
 }
  function Users() {

  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));

  }, [])
  return (
    <div>
      <h3>Dynamic Users :{users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)

        }
      </ul>

    </div>

   );
 }


function Product(props) {
  const productStyle ={
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor :'lightgray',
    height :'200px',
    width : '200px',
    float :'left',
    margin : '10px'
  }
  return(
    <div style={productStyle}>
      <h2>{props.name}</h2>
      <h5>{props.price}</h5>
      <button>Buy now</button>
    </div>

  )
}



export default App;
