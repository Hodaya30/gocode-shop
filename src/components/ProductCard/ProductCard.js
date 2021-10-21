import { useContext } from 'react';
import React, {createContext, useState} from "react";
import './ProductCard.css'
import { CartContext } from '../../CartContext';
function ProductCard({image,description,price}) {
const [cart,setCart]=useContext(CartContext);
const addToCart=()=>{
  const item={image,description,price}
setCart([...cart,item])
console.log(cart);};


  return (
    <div className="product-card">
        <div className="product-image">
          <img alt="" src={image}/>
        </div>
        <div className="product-info">
          <h5>{description}</h5>
          <h6>{price}</h6>
        </div>
        <div className="add-to-cart">
          <button onClick={addToCart}> Add to cart</button>
        </div>
      </div>
  );
  }

export default ProductCard;
