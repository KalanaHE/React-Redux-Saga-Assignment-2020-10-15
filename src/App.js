import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import { Container } from "@material-ui/core";
import NavBar from "./components/NavBar";
import DistanceMessure from "./components/DistanceMessure";
import SearchCountries from "./components/SearchCountries";
import Home from "./components/Home";
import Login from "./components/LoginScreen";
import TimeRangeCountries from "./components/TimeRangeContries";
import SearchClosest from "./components/ClosestCountry";

import { useSelector } from "react-redux";

function App() {
  const login = useSelector((state) => state.isLogged);
  return (
    <Router>
      <div className="App">
        <NavBar />
        <br />

        <Container maxWidth="lg">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route
              path="/distance"
              render={() => (login ? <DistanceMessure /> : <Redirect to="/" />)}
            />
            <Route
              path="/searchname"
              render={() => (login ? <SearchCountries /> : <Redirect to="/" />)}
            />
            <Route
              path="/timerange"
              render={() =>
                login ? <TimeRangeCountries /> : <Redirect to="/" />
              }
            />
            <Route
              path="/searchclosest"
              render={() => (login ? <SearchClosest /> : <Redirect to="/" />)}
            />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
