import React from "react";
import "./App.css";
import { Container } from "@material-ui/core";
import NavBar from "./components/NavBar";
import DistanceMessure from "./components/DistanceMessure";
import FindClosestCountry from "./components/FindClosestCountry";

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <NavBar />
        <DistanceMessure />
        <br />
        <FindClosestCountry />
      </Container>
    </div>
  );
}

export default App;
