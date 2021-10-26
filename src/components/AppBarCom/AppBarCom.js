import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import { color } from '@mui/system';
import Cart from '../Cart/Cart';
import  './AppBarCom.css';


export default function AppBarCom() {
  return (
    <Box sx={{ flexGrow: 0} }  >
      <AppBar className="app-Bar" style={{ background: '#f6f6f6' }} position="absolute"  >
      <Toolbar  >
      <Link to="/" >
          <Typography variant="h6" component="div" style={{ color: '#006064' }} sx={{ flexGrow: 1 }}>
            GoShop
          </Typography>
          </Link>
          <Cart />
          <IconButton className="icon"
            size="large"
            edge="end"
            color="default"
            aria-label="menu"
            sx={{ mr: 2 }}
            
          >
            <MenuIcon />
          </IconButton>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
