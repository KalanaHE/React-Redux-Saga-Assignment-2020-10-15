import React, { useState } from "react";
import { useSelector } from "react-redux";
import { requestSearchByName } from "../redux/actions";

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

const SearchCountries = () => {
  const countries = useSelector((state) => state.getCountriesByName);

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
    dispatch(requestSearchByName(state));
    // console.log(state);
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography>Search Countries</Typography>
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
        {countries === 0
          ? "Enter a keyword to search countries"
          : JSON.stringify(countries)}
      </CardContent>
    </Card>
  );
};

export default SearchCountries;
