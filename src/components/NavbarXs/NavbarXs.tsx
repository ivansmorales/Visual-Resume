import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import ReceiptIcon from '@material-ui/icons/Receipt';
import FaceIcon from '@material-ui/icons/Face';
import EmailIcon from '@material-ui/icons/Email';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import './styles.scss';

interface NavbarXsProps {
  setSelectedView: any;
  setDarkMode: any;
  darkMode: any;
}

const NavbarXs = (props: NavbarXsProps) => {
  const preventDefault = (event: any) => event.preventDefault();

  return (
    <div className="navxs__section">
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            href="#home"
            onClick={() => props.setSelectedView('Home')}
          >
            <HomeIcon />
          </IconButton>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="face"
            href="#about"
            onClick={() => props.setSelectedView('About')}
          >
            <FaceIcon />
          </IconButton>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="face"
            href="#resume"
            onClick={() => props.setSelectedView('Resume')}
          >
            <ReceiptIcon />
          </IconButton>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="face"
            href="#news"
            onClick={() => props.setSelectedView('News')}
          >
            <AssignmentIndIcon />
          </IconButton>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="face"
            href="#contact"
            onClick={() => props.setSelectedView('Contact')}
          >
            <EmailIcon />
          </IconButton>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="face"
            onClick={() => props.setDarkMode(!props.darkMode)}
          >
            <Brightness4Icon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavbarXs;
