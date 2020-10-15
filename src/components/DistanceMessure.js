import React, { useState } from "react";
import { useSelector } from "react-redux";
import { requestAPIData } from "../redux/actions";

import {
  Card,
  CardContent,
  Button,
  TextField,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { useDispatch } from "react-redux";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const DistanceMessure = () => {
  const distance = useSelector((state) => state.fetchDistance);
  // console.log(JSON.stringify(distance));

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
    dispatch(requestAPIData(state));
    // console.log(state);
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography>Meassure Distance Between Two Countries</Typography>
        <br />
        <TextField
          label="From (Country Code)"
          value={from}
          onChange={(e) => handleFrom(e.target.value)}
          variant="outlined"
        />
        <br />
        <br />
        <TextField
          label="To (Country Code)"
          value={to}
          onChange={(e) => handleTo(e.target.value)}
          variant="outlined"
        />
        <br />
        <br />
        <Button
          variant="contained"
          onClick={() => handleButtonClick()}
          color="secondary"
        >
          Meassure Distance
        </Button>
        <br />
        <br />
        {distance === "" ? "null" : JSON.stringify(distance) + " KM"}
      </CardContent>
    </Card>
  );
};

export default DistanceMessure;
