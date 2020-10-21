import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
} from "@material-ui/core";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeLoginState } from "../redux/actions";

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
}));

const NavBar = () => {
  const login = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: "teal" }}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            REACT-REDUX-SAGA-Assignment
          </Typography>
          <Button color="secondary">
            <Link to={"/"}>Home</Link>
          </Button>
          <Button color="secondary">
            <Link to={"/distance"}>Distance Meassure</Link>
          </Button>
          <Button color="secondary">
            <Link to={"/searchname"}>Search Countries</Link>
          </Button>
          <Button color="secondary">
            <Link to={"/timerange"}>Search Time Range</Link>
          </Button>
          <Button color="secondary">
            <Link to={"/searchclosest"}>Search Closest</Link>
          </Button>

          {login ? (
            <Button
              color="secondary"
              onClick={() => dispatch(changeLoginState(false))}
            >
              Logout
            </Button>
          ) : (
            <Button
              color="secondary"
              onClick={() => dispatch(changeLoginState(true))}
            >
              login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
