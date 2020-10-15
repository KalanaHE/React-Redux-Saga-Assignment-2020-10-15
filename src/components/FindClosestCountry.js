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

const FindClosestCountry = () => {
  const classes = useStyles();

  const [country, setCountry] = useState("");

  const handleCountry = (country) => {
    setCountry(country);
  };

  const handleFind = () => {
    const state = {
      country: country,
    };
    console.log(state);
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography>Find Closest Countries</Typography>
        <br />
        <TextField
          label="Country (Country Code)"
          value={country}
          onChange={(e) => handleCountry(e.target.value)}
          variant="outlined"
        />

        <br />
        <br />
        <Button
          variant="contained"
          onClick={() => handleFind()}
          color="secondary"
        >
          Find
        </Button>
      </CardContent>
    </Card>
  );
};

export default FindClosestCountry;
