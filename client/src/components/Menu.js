import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';




export default function Menu() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Typography variant="h6" component="div" style={{ color: '#006064' }} sx={{ flexGrow: 1 }}>
            Welcome to GoShop
          </Typography>
          </Link>
          <Divider />
         <List>
         <Link to={`/admin/`}> 
         <ListItem button key="admin">
            <ListItemIcon>
            <InboxIcon /> 
            </ListItemIcon>
            <ListItemText primary="Admin" />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
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
            
<IconButton
          onClick={toggleDrawer('right', true)}
            size="large"
            edge="start"
            color="default"
            aria-label="menu]"
            sx={{ mr: 2 }}
          >
            <MenuIcon sx={{ fontSize: 30 }}/>
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
