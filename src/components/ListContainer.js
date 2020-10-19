import React from "react";
import { List as list } from "@material-ui/core";

const ListContainer = (props) => {
  return <list>{props.children}</list>;
};

export default ListContainer;
