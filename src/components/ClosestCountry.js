import React, { useState } from "react";
import { useSelector } from "react-redux";
import { requestClosestCountry } from "../redux/actions";

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
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const ClosestCountry = () => {
  const closest = useSelector((state) => state.ClosestCountry);
  const login = useSelector((state) => state.isLogged);

  const dispatch = useDispatch();
  const classes = useStyles();

  const [country, setCountry] = useState("");

  const handleCountry = (country) => {
    setCountry(country);
  };

  const handleButtonClick = () => {
    const state = {
      country: country,
    };
    dispatch(requestClosestCountry(state));
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        {login ? (
          <div>
            <Typography>Search Closest Country</Typography>
            <br />
            <TextField
              label="Country (Country Code)"
              inputProps={{ maxLength: 3 }}
              value={country}
              onChange={(e) => handleCountry(e.target.value)}
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
            <h1>{closest}</h1>
          </div>
        ) : (
          <h2>Content Hidden! Log in to see the content!</h2>
        )}
      </CardContent>
    </Card>
  );
};

export default ClosestCountry;
