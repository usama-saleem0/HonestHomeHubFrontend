import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Header from '../header/Header';
import { Stack } from '@mui/material';
import './style.css';
import { main_color } from '../../utils/color';
import Drawer_Side_Content from './Drawer_Side_Content';

const drawerWidth = 240;

export default function Templates_SideBar(props) {
  const { window, content_section } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  const handleDataFromChild = (data) => {
    // This function will be called by the child component
    // and will receive the data as a parameter
    // console.log('Data from child:', data);
    // setDataFromChild(data);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {/* <CssBaseline /> */}
      <AppBar
        elevation={1}
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: 'white',
          color: 'black',
        }}
      >
        <Toolbar sx={{ backgroundColor: 'white' }}>
          <IconButton
            color="secondary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Stack flexGrow={1}>
            <Header />
          </Stack>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
          }}
        >
          <Stack className="drawer_style" width={230}>
            <Drawer_Side_Content sendDataToParent={handleDataFromChild} />
          </Stack>
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
          }}
          open
        >
          <Stack className="drawer_style" width={280}>
            <Drawer_Side_Content />
          </Stack>
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - 260px)` } }}
      >
        {content_section}
      </Box>
    </Box>
  );
}
