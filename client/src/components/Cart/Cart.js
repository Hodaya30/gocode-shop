import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import  {useState} from "react";
import { CartContext } from '../../CartContext';
import { useContext } from 'react';
import './Cart.css'
import { Link } from 'react-router-dom';
import {addToCart} from '../../utils/cartFunctionality'
import {removeFromCart} from '../../utils/cartFunctionality'
import Button from '@mui/material/Button';


export default function Cart() {
  const [state, setState] = useState({right: false});
  const [cartItems,setCartItems]=  useContext(CartContext);
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const totalPrice = itemsPrice ;
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ state, [anchor]: open });
  };


  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
      {cartItems.length === 0 && <div>Cart is empty</div>}
      {
      cartItems.map((item) => (
      <div className="product-card">
       <Link to={`/products/${item.id}`}> 
       <div className="product-image-cart">
          <img alt="" src={item.image}/>
        </div></Link>
        <div className="product-info">
          <h5>{item.title}</h5>
          <h6>{item.qty} x ${item.price.toFixed(2)}</h6>
        </div>
        <div class="wrapper">
              < Button variant="outlined" onClick={() => removeFromCart(item, cartItems, setCartItems)} className="remove">
                -
              </Button  >{' '}
              <Button  variant="outlined"  onClick={() => addToCart(item, cartItems, setCartItems)}  className="add">
                +
              </Button >
            </div>
      </div>
      
      ))}
      </List>
      <Divider />
      <List>
        <div className="product-info">
         <strong>Total Price:</strong>
        <strong>${totalPrice.toFixed(2)}</strong>
        </div>
      </List>
      <Divider />
      <List>

        <div className="row">
              <button onClick={() => alert('Implement Checkout!')}>
                Checkout
              </button>
            </div>
      </List>
    </Box>
  );

  return (
    <div>
      {
        <React.Fragment key='right'>
          <IconButton
          onClick={toggleDrawer('right', true)}
            size="large"
            edge="start"
            color="default"
            aria-label="menu]"
            sx={{ mr: 2 }}
          >
            <ShoppingCartIcon   sx={{ fontSize: 30 }}/>
            <div style={{ color: '#006064' }}> My Cart </div>
          </IconButton >
          <Drawer
            anchor='right'
            open={state['right']}
            onClose={toggleDrawer('right', false)}
      
          >
            {list('right')}
          </Drawer>
        </React.Fragment>
      }
    </div>
  );
}