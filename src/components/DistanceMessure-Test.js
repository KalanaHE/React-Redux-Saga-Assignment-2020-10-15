import React, { useState } from "react";

import {
  Card,
  CardContent,
  Button,
  TextField,
  Typography,
  makeStyles,
} from "@material-ui/core";

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
    // console.log(state);
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <div>
          <Typography className="ss">
            Meassure Distance Between Two Countries
          </Typography>
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
            variant="contained"
            onClick={() => handleButtonClick()}
            color="secondary"
          >
            Meassure Distance
          </Button>
          <br />
          <br />
        </div>
      </CardContent>
    </Card>
  );
};

export default DistanceMessure;
