import React from "react";
// import { makeStyles } from "@material-ui/core";
// @mui/material/styles
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  useMediaQuery,
  makeStyles,
} from "@material-ui/core";
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
} from "@material-ui/icons";
import { BrowserRouter, Route, Link, useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  drawer: {
    width: 240,
  },
  drawerPaper: {
    width: 240,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
}));

function NavMenu() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const matches = useMediaQuery("(min-width:600px)");
  const history = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {!matches && (
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" className={classes.title}>
            My App
          </Typography>
        </Toolbar>
      </AppBar>
      {!matches && (
        <Drawer
          className={classes.drawer}
          variant="temporary"
          open={open}
          onClose={handleDrawerClose}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <List>
            <ListItem button key="Home" onClick={() => history.push("/")}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button key="About" onClick={() => history.push("/about")}>
              <ListItemText primary="About" />
            </ListItem>
            <ListItem
              button
              key="Contact"
              onClick={() => history.push("/contact")}
            >
              <ListItemText primary="Contact" />
            </ListItem>
          </List>
        </Drawer>
      )}
    </div>
  );
}

export default NavMenu;
