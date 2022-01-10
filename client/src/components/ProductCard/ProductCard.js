import { useContext } from 'react';
import './ProductCard.css'
import { CartContext } from '../../CartContext';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from "react-router-dom";
import {addToCart} from '../../utils/cartFunctionality'
function ProductCard({id,image,title,description,price}) {
const item={id,image,title,description,price};
const [cartItems,setCartItems]=useContext(CartContext);

  return (
    

    <div className="product-card">
      <div>
       <Link to={`/products/${id}`}> 
       <div className="product-image">
          <img alt="" src={image}/>
        </div></Link>
          <div className="product-info">
            <h5>{title}</h5>
         </div>
        <div className="product-info">
          <h6>{price}$</h6>
        </div>
        </div>
        <div className="add-to-cart" >
        <IconButton  color="primary" onClick={() => addToCart(item, cartItems, setCartItems, )} aria-label="add to shopping cart"> <AddShoppingCartIcon /></IconButton>
        </div>
      </div>
  );
  }

export default ProductCard;
