
import React, { Children, createContext, useState } from 'react';


const ProductContext = createContext();
let products=[
    
    {
            "id": 2,
            "title": "iPhone X",
            "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
            "price": 899,
            "discountPercentage": 17.94,
            "rating": 4.44,
            "stock": 34,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
            "images":"https://i.dummyjson.com/data/products/2/1.jpg"
    }
  ]
  const ProductProvider =({children})=>{
        const [product,setproduct] =useState(products);
        const [total,settotal] = useState(product.price)
    
        return (
           <ProductContext.Provider value={{product,setproduct,total,settotal}}>
               {children}
           </ProductContext.Provider>
        )
  }

export {ProductContext,ProductProvider}