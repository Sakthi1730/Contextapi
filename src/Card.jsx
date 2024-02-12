import React, { useContext, useState } from 'react';
import { ProductContext } from './ProductContext';
import './App.css';

const Card = () => {
  const [selectedValue, setSelectedValue] = useState(1);

  const { product } = useContext(ProductContext); 

  const handleDropdownChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const handleRemoveButtonClick = () => {
    setSelectedValue(0);
  };

  
  const subtotal = product[0].price * selectedValue;
  const shipping = 0; 
  const total = subtotal + shipping;
  

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', flex: 1 }}>
        <div style={{ flex: 1 }}>
          <img src={product[0].images} alt="Your Image" style={{ width: '100%' }} />
        </div>
        <div style={{ flex: 2 }}>
          <div>
            <h3>{product[0].title}</h3>
          </div>
          <div>
            <p>{product[0].description}</p>
          </div>
          <div>
            <p>Rating:{product[0].rating}</p>
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <select value={selectedValue} onChange={handleDropdownChange}>
            {[0, 1, 2, 3, 4, 5].map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <div style={{ flex: 1 }}>
          <p>{product[0].price}</p>
          <button className="btn" onClick={handleRemoveButtonClick}>Remove</button>
        </div>
      </div>

      
      <div style={{ margin: '80px', display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <p style={{ textAlign: 'left' }}>Subtotal:</p>
          <p style={{ textAlign: 'left' }}>Shipping:</p>
          <p style={{ textAlign: 'left' }}>Total:</p>
        </div>
        <div>
          <p style={{ textAlign: 'right' }}>${subtotal}</p>
          <p style={{ textAlign: 'right' }}>${shipping}</p>
          <p style={{ textAlign: 'right' }}>${total}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
