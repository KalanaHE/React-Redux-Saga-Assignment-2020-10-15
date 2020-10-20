import React from "react";

import { ListItem, ListItemText } from "@material-ui/core";

const CountryListItem = ({ code, country }) => {
  return (
    <div>
      <ListItem>
        <ListItemText primary={country} />
      </ListItem>
    </div>
  );
};

export default CountryListItem;
