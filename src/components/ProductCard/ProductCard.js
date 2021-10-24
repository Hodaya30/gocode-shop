import { Children, useContext } from 'react';
import React, {createContext, useState} from "react";
import './ProductCard.css'
import { CartContext } from '../../CartContext';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from "react-router-dom";

function ProductCard({id,image,description,price}) {
const [cart,setCart]=useContext(CartContext);
const addToCart=()=>{
  const item={image,description,price}
setCart([...cart,item])};


  return (
    

    <div className="product-card">
       <Link to={`/products/${id}`}> <div className="product-image">
          <img alt="" src={image}/>
        </div></Link>
        <div className="product-info">
          <h5>{description}</h5>
          <h6>{price}$</h6>
        </div>
        <div className="add-to-cart">
        <IconButton color="primary" onClick={addToCart} aria-label="add to shopping cart"> <AddShoppingCartIcon /></IconButton>
        </div>
      </div>
  );
  }

export default ProductCard;
