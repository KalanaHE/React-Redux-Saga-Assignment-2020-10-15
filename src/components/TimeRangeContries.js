import React, { useState } from "react";
import { useSelector } from "react-redux";
import { requestSearchByTime } from "../redux/actions";
import { useDispatch } from "react-redux";

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

const TimeRangeCountries = () => {
  const countries = useSelector((state) => state.CountriesByTime);
  const login = useSelector((state) => state.isLogged);

  const dispatch = useDispatch();
  const classes = useStyles();

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

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
    dispatch(requestSearchByTime(state));
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        {login ? (
          <div>
            <Typography>Get All Countries Within The Time Range</Typography>
            <br />
            <TextField
              label="From Range"
              inputProps={{ maxLength: 9 }}
              value={from}
              onChange={(e) => handleFrom(e.target.value)}
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              label="To Range"
              inputProps={{ maxLength: 9 }}
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
              Search
            </Button>
            <br />
            <br />
            {countries === 0
              ? "Enter two time ranges to list all countries within this range"
              : countries.map((country) => {
                  return (
                    <h4 key={country.name}>
                      {country.name} {country.timezone}
                    </h4>
                  );
                })}
          </div>
        ) : (
          <h2>Content Hidden! Log in to see the content!</h2>
        )}
      </CardContent>
    </Card>
  );
};

export default TimeRangeCountries;
