import React, { useState } from 'react';
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles,useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SearchHistory from '../../shared/SearchHistory/SearchHistory.component';


import {
  AppBar,
  Toolbar,
  ClickAwayListener,
  Typography,
  IconButton,
  Divider,
  Drawer,
  List
 } from '@material-ui/core';

const drawerWidth = 240;


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  }));

  const NavBar= (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const IsMobile = props.IsMobile;

    const onSideBarClick = props.onSideBarClick;


    const toggleDrawer = (toggler) => (
      event) => {
      if (
        event.type === 'keydown' &&
        ((event).key === 'Tab' ||
          (event).key === 'Shift')
      ) {
        return;
      }
  
      setIsOpen(!toggler);
    };
    

    return(
      <ClickAwayListener onClickAway={ (isOpen && toggleDrawer(isOpen))}>
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: isOpen,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(isOpen)}
            edge="start"
            className={clsx(classes.menuButton, isOpen && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
          Duck Duck Go
          </Typography>
        </Toolbar>
      </AppBar>
      
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={isOpen} 
        onClose={toggleDrawer(isOpen)}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={toggleDrawer(isOpen)}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
   
   
   
        <Divider />

        <div
          className={classes.fullList}
          role="presentation"
          onClick={toggleDrawer(isOpen)}
          onKeyDown={toggleDrawer(isOpen)}
        >
          <List>
        {
          IsMobile?
          <SearchHistory onSideBarClick = {onSideBarClick}/> //can be converted to 2 versions later, this will be mobile version
           
            :
            <SearchHistory/> //can be converted to 2 versions later, this will be desktop version

            
        }

          </List>
        </div>

      </Drawer>



      <main
        className={clsx(classes.content, {
          [classes.contentShift]: isOpen,
        })}
      >
        <div className={classes.drawerHeader} />
      
      </main>
    </div>
     </ClickAwayListener>

    )
}
export default NavBar;
