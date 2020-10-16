import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { Container } from "@material-ui/core";
import NavBar from "./components/NavBar";
import DistanceMessure from "./components/DistanceMessure";
import SearchCountries from "./components/SearchCountries";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <br />

        <Container maxWidth="lg">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/distance" component={DistanceMessure} />
            <Route path="/searchname" component={SearchCountries} />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
