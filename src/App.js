import logo from './logo.svg';
import './App.css';
import Card from './Card.jsx';
import { useState } from 'react';
import { useContext } from 'react';
import { ProductContext } from './ProductContext';


function App() {

  const {product} = useContext(ProductContext)
  console.log(product);

  return (
    <div className="App">
      {
        product.map((product)=>
        {
          return<Card product={product}/>
        })
        
      }
      
    

    </div>
  );
}

export default App;
