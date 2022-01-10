import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import Cart from '../Cart/Cart';
import  './AppBarCom.css';
import Menu from '../Menu';


export default function AppBarCom() {
  return (
    <Box sx={{ flexGrow: 0} }  >
      <AppBar className="app-Bar" style={{ background: '#f6f6f6' }} position="absolute"  >
      <Toolbar  >
      <Box display='flex' flexGrow={1}>
      <div>
      <Link to="/" style={{ textDecoration: 'none' }}>
          <Typography variant="h6" component="div" style={{ color: '#006064' }} sx={{ flexGrow: 1 }}>
            GoShop
          </Typography>
          </Link>
          </div>        </Box>
          <Cart sx={{  marginLeft: 'auto' }}/>
            <Menu/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
