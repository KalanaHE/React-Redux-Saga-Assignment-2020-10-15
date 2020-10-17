import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
} from "@material-ui/core";

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
          <Button color="secondary">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
