import React from "react";

import { ListItemIcon, ListSubheader, ListItemText } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { Item, LinkTo as Link } from "./listItemsStyled";

// const mainItems =[{text:"Inicio",route:"/home",icon:""},{}]
export const mainListItems = (
  <>
    <Link to="/home">
      <Item button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Inicio" />
      </Item>
    </Link>
    <Link to="/sale">
      <Item button>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Venta" />
      </Item>
    </Link>
    <Link to="/customers">
      <Item button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Clientes" />
      </Item>
    </Link>
    <Link to="/Reports">
      <Item button>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Reportes" />
      </Item>
    </Link>
    <Link to="/integrations">
      <Item button>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Integrations" />
      </Item>
    </Link>
  </>
);

export const secondaryListItems = (
  <>
    <ListSubheader inset>Saved reports</ListSubheader>
    <Item button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </Item>
    <Item button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </Item>
    <Item button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </Item>
  </>
);
