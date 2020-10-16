import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { Container } from "@material-ui/core";
import NavBar from "./components/NavBar";
import DistanceMessure from "./components/DistanceMessure";
import SearchCountries from "./components/SearchCountries";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <br />

        <Container maxWidth="lg">
          <Switch>
            <Route exact path="/" />
            <Route path="/distance" component={DistanceMessure} />
            <Route path="/searchname" component={SearchCountries} />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
