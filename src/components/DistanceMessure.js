import React, { useState } from "react";
import { useSelector } from "react-redux";
import { requestDistance } from "../redux/actions";

import {
  Card,
  CardContent,
  Button,
  TextField,
  makeStyles,
} from "@material-ui/core";
import { useDispatch } from "react-redux";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const DistanceMessure = () => {
  const distance = useSelector((state) => state.Distance);
  const login = useSelector((state) => state.isLogged);

  const dispatch = useDispatch();
  const classes = useStyles();

  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");

  const handleFrom = (from) => {
    setFrom(from);
  };

  const handleTo = (to) => {
    setTo(to);
  };

  const handleButtonClick = () => {
    const state = {
      from: from,
      to: to,
    };
    dispatch(requestDistance(state));
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        {login ? (
          <div>
            <div className="tt">Meassure Distance Between Two Countries</div>
            <br />
            <TextField
              label="From (Country Code)"
              inputProps={{ maxLength: 3 }}
              value={from}
              onChange={(e) => handleFrom(e.target.value)}
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              label="To (Country Code)"
              inputProps={{ maxLength: 3 }}
              value={to}
              onChange={(e) => handleTo(e.target.value)}
              variant="outlined"
            />
            <br />
            <br />
            <Button
              className="butn"
              variant="contained"
              onClick={() => handleButtonClick()}
              color="secondary"
            >
              Meassure Distance
            </Button>
            <br />
            <br />
            {distance === 0
              ? "Enter two country codes to meassure distance"
              : JSON.stringify(distance)}
          </div>
        ) : (
          <h2>Content Hidden! Log in to see the content!</h2>
        )}
      </CardContent>
    </Card>
  );
};

export default DistanceMessure;
