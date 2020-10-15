import React from "react";
import "./App.css";
import { Container } from "@material-ui/core";
import NavBar from "./components/NavBar";
import DistanceMessure from "./components/DistanceMessure";

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <NavBar />
        <DistanceMessure />
      </Container>
    </div>
  );
}

export default App;
