import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>
    </div>
  );
}
function ExternalUsers() {
  const [users, setUsers] = useState([]);
  // useEffect( () => {},[])
  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  },[])
  return (
    <div>
      <h2>External User</h2>
      <p>{users.length}</p>
      {
        users.map(user => <User name= {user.name} email= {user.email}></User> )
      }
    </div>
  );
}
function User(props){
  return (
    <div style={{border: '2px solid purple', backgroundColor: 'pink', margin: '15px', borderRadius: '15px'}}>
      <h2>Name: {props.name}</h2>
      <p>Email: {props.email}</p>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(61);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  /* const increaseCount = () => {
    const newCount = count + 1;
    setCount(newCount);
  }*/
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

/*const products = [
  {name: 'Laptop', price: 58000},
  {name: 'Phone', price: 28000},
  {name: 'Watch', price: 3000},
  {name: 'Tablet', price: 18000}
]
<Product name= "Laptop" price= "55000"></Product>
<Product name= "Phone" price= "15000"></Product>
<Product name= "Watch" price= "1000"></Product> 


function Product(props){
  return (
    <div className="product">
      <h2>Name: {props.name}</h2>
      <p>Price: {props.price}</p>
    </div>
  )
}
*/

export default App;
