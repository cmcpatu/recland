import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import FolderIcon from '@mui/icons-material/Folder';
import ImageIcon from '@mui/icons-material/Image';
import DescriptionIcon from '@mui/icons-material/Description';
import Box from '@mui/material/Box';

const Layout = () => {
  const [open, setState] = useState(false);

  const toggleDrawer = (isOpen) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState(isOpen);
  };

  return (
    <div className="layout-wrap">
      <div className="layout__hamburger__menu">
        <IconButton
          edge="end"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer(true)}
          sx={{
            mr: 2,
          }}
        >
          <MenuIcon />
        </IconButton>
      </div>

      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <Box
          sx={{
            p: 2,
            height: 1,
            width: '300px',
            backgroundColor: 'white',
          }}
        >
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row-reverse',
          }}
          >
            <IconButton>
              <CloseIcon onClick={toggleDrawer(false)} />
            </IconButton>
            <Box sx={{
              fontWeight: 'bold',
              fontSize: '20px',
              color: 'primary.main',
            }}
            >
              <span>Menu</span>
            </Box>
          </Box>

          <Divider sx={{ mb: 2 }} />

          <Box sx={{ mb: 2 }}>
            <ListItemButton>
              <ListItemIcon>
                <ImageIcon sx={{ color: 'primary.main' }} />
              </ListItemIcon>
              <Link to="/">Home</Link>
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
                <DescriptionIcon sx={{ color: 'primary.main' }} />
              </ListItemIcon>
              <Link to="/blogs">Blogs</Link>
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
                <FolderIcon sx={{ color: 'primary.main' }} />
              </ListItemIcon>
              <Link to="/contact">Contact</Link>
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
                <FolderIcon sx={{ color: 'primary.main' }} />
              </ListItemIcon>
              <Link to="/signup">Signup</Link>
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
                <FolderIcon sx={{ color: 'primary.main' }} />
              </ListItemIcon>
              <Link to="/signin">Signin</Link>
            </ListItemButton>
          </Box>
        </Box>
      </Drawer>
      <Outlet />
    </div>
  );
};

export default Layout;
