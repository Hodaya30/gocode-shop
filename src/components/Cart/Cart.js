import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ProductCard from '../ProductCard/ProductCard';
import  {useState} from "react";
import { CartContext } from '../../CartContext';
import { useContext } from 'react';

export default function Cart() {
  const [state, setState] = useState({right: false});
  const [cart,setCart]=  useContext(CartContext);
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
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
      {
      cart.map(({id, image, description, price}) => (
      <ProductCard 
      key={id} 
      image={image} 
      description={description}
       price={price}>
      </ProductCard>))}
      </List>
      <Divider />
      <List>
        {['Total price', 'Items in cart', 'P'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {
        <React.Fragment key='right'>
          <Button onClick={toggleDrawer('right', true)}  startIcon={  <ShoppingCartIcon sx={{ fontSize: 477 }}/>}></Button>
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