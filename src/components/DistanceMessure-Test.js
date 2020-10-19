import React, { useState } from "react";

import {
  Card as card,
  CardContent as cardcontent,
  Button as button,
  TextField as textfield,
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
    <div>
      <card className={classes.root}>
        <cardcontent>
          <div>
            <Typography className="ss">
              Meassure Distance Between Two Countries
            </Typography>
            <br />
            <textfield
              label="From (Country Code)"
              inputProps={{ maxLength: 3 }}
              value={from}
              onChange={(e) => handleFrom(e.target.value)}
              variant="outlined"
            />
            <br />
            <br />
            <textfield
              label="To (Country Code)"
              inputProps={{ maxLength: 3 }}
              value={to}
              onChange={(e) => handleTo(e.target.value)}
              variant="outlined"
            />
            <br />
            <br />
            <button
              variant="contained"
              onClick={() => handleButtonClick()}
              color="secondary"
            >
              Meassure Distance
            </button>
            <br />
            <br />
          </div>
        </cardcontent>
      </card>
    </div>
  );
};

export default DistanceMessure;
