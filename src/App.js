import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Container } from "@material-ui/core";
import NavBar from "./components/NavBar";
import DistanceMessure from "./components/DistanceMessure";
import SearchCountries from "./components/SearchCountries";
import Home from "./components/Home";
// import Login from "./components/LoginScreen";
import TimeRangeCountries from "./components/TimeRangeContries";
import SearchClosest from "./components/ClosestCountry";

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
            <Route path="/timerange" component={TimeRangeCountries} />
            <Route path="/searchclosest" component={SearchClosest} />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
