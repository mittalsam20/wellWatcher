// import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import { NavLink, Link, useHistory } from "react-router-dom";
import "./navbar.css";

import { useContext } from "react";
// import { userData } from "../../context";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontWeight: 900,
  },
}));

const NavBar = () => {
  // const { rootUser } = useContext(userData);
  const history = useHistory();
  const classes = useStyles();
  //   console.log("navbarrrrrrrrrrrrrrrr", rootUser._id);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            <img src="/images/logo_w.png" alt="" style={{ width: "8%" }} />
            WellWatcher
          </Typography>
          <NavLink
            exact
            className="navlink"
            activeClassName="selected"
            exact
            to="/home"
          >
            Home
          </NavLink>
          <NavLink
            className="navlink"
            activeClassName="selected"
            exact
            to="/account"
          >
            Account
          </NavLink>
          <Link
            className="navlink"
            onClick={() => {
              axios
                .get("/app/logout", {
                  withCredentials: true,
                })
                .then((res) => {
                  history.push("/login", { replace: true });
                  if (res.status !== 200) {
                    const error = new Error(res.error);
                    throw error;
                  }
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            Logout
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
