import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { CartContext } from "../CartContext";
import AppBarCom from "../components/AppBarCom/AppBarCom";
import './ProductDetails.css';
import {addToCart} from '../utils/cartFunctionality';
import {removeFromCart} from '../utils/cartFunctionality';
import Button from '@mui/material/Button';

function ProductDetails(){
const [cartItems,setCartItems]=  useContext(CartContext);
const { id }=useParams();
const [product, setProduct]=useState("");


useEffect(()=>{
    fetch( `/api/products/${id}`).then((res)=>res.json())
    .then((product)=>{
      setProduct(product);  
      });
},[id]);
const price=product.price;
const image=product.image;
const title=product.title;
const description=product.description;
const item={id,image,title,description,price};

return(
  <div>
      <AppBarCom/>
    <div className="product-card-details">
        <div className="product-image-details">
          <img alt="" src={product?.image}/>
        </div>
        <div className="product-info-details">
          <h5>{product?.title}</h5>
          <h7>{product?.description}</h7>
          <h6>{product?.price}$</h6>
          <div class="wrapper">
              < Button variant="outlined" onClick={() => removeFromCart(item, cartItems, setCartItems)} className="remove">
                -
              </Button  >{' '}
              <Button  variant="outlined"  onClick={() => addToCart(item, cartItems, setCartItems)}  className="add">
                +
              </Button >
          </div>
     
        </div>    
    </div>
  </div>

    )
}
export default ProductDetails;