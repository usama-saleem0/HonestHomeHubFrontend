import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { Stack } from '@mui/material';
import '../style.css';
import { main_color } from '../../../utils/color';
import Header from '../../header/Header';
import Admin_Drawer_Side_Content from './Admin_Drawer_Side_Content';

const drawerWidth = 240;

export default function AdminTemplatesSideBar(props) {
  const { window, content_section } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const handleDrawerToggle = () => {
    console.log('abcddcd');
    setMobileOpen(true);
  };

  const handleDrawerToggles = () => {
    console.log('abcddcd');
    setMobileOpen(false);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  const handleDataFromChild = (data) => {
    // Handle data from child component
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        onClick={handleDrawerToggles}
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
            style={{ zIndex: '1' }}
            color="secondary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            onTouchStart={handleDrawerToggle}
            onTouchEnd={handleDrawerToggle}
            onTouchMove={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Stack flexGrow={1}>
            <Header />
          </Stack>
        </Toolbar>
      </AppBar>

      <div>
        {mobileOpen && (
          <div>
            <Stack
              style={{ zIndex: '0' }}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
              sx={{
                display: { xs: 'block', sm: 'block' },
              }}
            >
              <Stack className="drawer_style" width={230}>
                <Admin_Drawer_Side_Content sendDataToParent={handleDataFromChild} />
              </Stack>
            </Stack>
          </div>
        )}

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
          }}
          open
        >
          <Stack className="drawer_style" width={280}>
            <Admin_Drawer_Side_Content />
          </Stack>
        </Drawer>

        <div onClick={handleDrawerToggles}>{content_section}</div>
      </div>
    </Box>
  );
}
