import React from "react";

import {
  ListItem as listitem,
  ListItemText as listitemtext,
} from "@material-ui/core";

const CountryListItem = ({ code, country }) => {
  return (
    <div>
      <listitem>
        <listitemtext primary={country} />
      </listitem>
    </div>
  );
};

export default CountryListItem;
