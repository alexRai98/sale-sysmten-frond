import React, { useState } from "react";
import {
  CssBaseline,
  Box,
  Typography,
  Container,
  Grid,
} from "@material-ui/core";
import { useStyles } from "./dashboardStyled";
import NavBarr from "./appBar";
import Menu from './appMenu'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Todos los derechos reservados © Compu Center "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Dashboard({ children }) {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />

      <NavBarr onOpen={handleDrawerOpen} open={open} />

      <Menu onClose={handleDrawerClose} open={open} />

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {children}
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}
