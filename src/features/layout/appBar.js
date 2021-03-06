import React, { useState } from "react";
import clsx from "clsx";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useStyles } from "./dashboardStyled";
import UserMenu from "./userMenu";
import Login from "../session/login/login";

export default function Barr({ onOpen, open }) {
  const classes = useStyles();
  const [showLogin, setShowLogin] = useState(false);

  const handleClickOpen = () => {
    setShowLogin(!showLogin);
  };

  return (
    <AppBar
      position="absolute"
      className={clsx(classes.appBar, open && classes.appBarShift)}
    >
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          onClick={onOpen}
          className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          className={classes.title}
        >
          Tech Solutions
        </Typography>
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Login
        </Button>
        <Login open={showLogin} handleClickOpen={handleClickOpen} />
        <UserMenu />
      </Toolbar>
    </AppBar>
  );
}
