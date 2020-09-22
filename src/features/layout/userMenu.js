import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import { useStyles } from "./dashboardStyled";

export default function SimpleMenu() {
  const classes = useStyles();
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <Button onClick={handleClick} className={classes.menuUser}>
        R
      </Button>
      {show && (
        <div style={{ top: "50px" }}>
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </div>
      )}
    </>
  );
}
