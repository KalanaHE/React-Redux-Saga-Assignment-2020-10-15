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
import CountryListItem from "./CountryListItem";
import ListContainer from "./ListContainer";

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
  const countries = useSelector((state) => state.CountriesByName);
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
    dispatch(requestSearchByName(state));
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        {login ? (
          <div>
            <Typography>Search Countries</Typography>
            <br />
            <TextField
              label="Country (Country Code)"
              inputProps={{ maxLength: 2 }}
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
            <ListContainer>
              {countries === 0
                ? "Enter a keyword to search countries"
                : countries.map((country) => {
                    return (
                      <CountryListItem
                        code={country.code}
                        country={country.name}
                        key={country.code}
                      />
                    );
                  })}
            </ListContainer>
          </div>
        ) : (
          <h2>Content Hidden! Log in to see the content!</h2>
        )}
      </CardContent>
    </Card>
  );
};

export default SearchCountries;
