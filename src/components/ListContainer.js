import React from "react";
import { List } from "@material-ui/core";

const ListContainer = (props) => {
  return <List>{props.children}</List>;
};

export default ListContainer;
