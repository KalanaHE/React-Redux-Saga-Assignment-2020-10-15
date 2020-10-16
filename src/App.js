import React from "react";
import "./App.css";
import { Container } from "@material-ui/core";
import NavBar from "./components/NavBar";
import DistanceMessure from "./components/DistanceMessure";
import SearchCountries from "./components/SearchCountries";

function App() {
  return (
    <div className="App">
      <NavBar />
      <br />
      <Container maxWidth="lg">
        <DistanceMessure />
        <br /> <br />
        <SearchCountries />
      </Container>
    </div>
  );
}

export default App;
