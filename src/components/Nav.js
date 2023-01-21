import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { ImMenu } from "react-icons/im";
import { ImCross } from "react-icons/im";

function NavBar() {
  const [mobile, setmobile] = useState(false);

  return (
    <nav className="navbar">
      <h3 className="logo">Logo</h3>

      <ul
        className={mobile ? "nav-links-mobile" : "nav-link"}
        onClick={() => setmobile(false)}
      >
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
      <button className="mobile-menu-icon" onClick={() => setmobile(!mobile)}>
        {mobile ? <ImCross /> : <ImMenu />}
      </button>
    </nav>
  );
}

export default NavBar;

// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
//   drawer: {
//     width: 240,
//   },
//   drawerPaper: {
//     width: 240,
//   },
//   drawerHeader: {
//     display: "flex",
//     alignItems: "center",
//     padding: theme.spacing(0, 1),
//     // necessary for content to be below app bar
//     ...theme.mixins.toolbar,
//     justifyContent: "flex-end",
//   },
// }));

// export default function ButtonAppBar() {
//   const classes = useStyles();

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             News
//           </Typography>
//           <Button color="inherit">Login</Button>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }
